import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";
import { PropsWithChildren, createContext, useContext } from "react";

const SubApiContext = createContext({});

const SubApiContextProvider = ({ children }: PropsWithChildren ) => {
        // @ts-ignore
                const { authToken } = useAuth();

 const listSubscriptions = async () => {
        
       
            const res = await fetch(`${API_URL}/subscription`,{
                headers: {
                    Authorization: `Bearer ${authToken}`,
                  },
            });
            console.log(res);
       
            if(res.status == 401){
                throw new Error('Error with authorization');
        }
            if(res.status !== 200){
                    throw new Error('Error on fetching events');
            }
            
            return await res.json();
            
}

 const getSubscription = async (id: string) => {
        
        const res = await fetch(`${API_URL}/subscription/${id}`,{
                headers: {
                        Authorization: `Bearer ${authToken}`,
                      },  
        });
        if(res.status == 401){
                throw new Error('Error with authorization');
        }
        if(res.status !== 200){
                throw new Error('Error on fetching events');
        }
        return await res.json();
       
}

 const createSubscription = async (data: {content: any}) => {
              console.log(data.content);
        const res = await fetch(`${API_URL}/subscription`,{
                method: 'POST',
                body: data.content,
                headers: {
                        Authorization: `Bearer ${authToken}`,
                        'Content-type':'application/json'
                      },
        });
        if(res.status == 401){
                throw new Error('Error with authorization');
        }
        if(res.status !== 200){
                throw new Error('Error on fetching events');
        }
        return await res.json();
       
}

return(<SubApiContext.Provider value={{
        listSubscriptions, getSubscription, createSubscription
}}>{children}</SubApiContext.Provider>)
}


export default SubApiContextProvider;

export const useSubApi = () => useContext(SubApiContext);