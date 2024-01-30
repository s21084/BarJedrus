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
       
            if(res.status == 401){
                 console.log("Error with auth")
        }
            if(res.status !== 200){
                    console.log("Error with auth");
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
                 console.log("Error with auth")
        }
        if(res.status !== 200){
                console.log("Error with auth");
        }
        return await res.json();
       
}

 const createSubscription = async (data: {lastMonthPayed: string, dishType: boolean, countOfDish: number, onPlace: boolean, notes: string, userId: number}) => {
              console.log(data);
        const res = await fetch(`${API_URL}/subscription`,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                        Authorization: `Bearer ${authToken}`,
                        'Content-type':'application/json'
                      },
        });
        if(res.status == 401){
                 console.log("Error with auth")
        }
        if(res.status !== 200){
                console.log("Error with auth");
        }
        return await res.json();
       
}

const editSubscription = async ({ id, data }: { id: string; data: {lastMonthPayed: string, dishType: boolean, countOfDish: number, onPlace: boolean, notes: string}}) => {
        //console.log(data.content);
  const res = await fetch(`${API_URL}/subscription/${id}`,{
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
                  Authorization: `Bearer ${authToken}`,
                  'Content-type':'application/json'
                },
  });
  if(res.status == 401){
           console.log("Error with auth")
  }
  if(res.status !== 200){
          console.log("Error with auth");
  }
  return await res.json();
 
}

const deleteSub=  async (id: string) => {
        const res = await fetch(`${API_URL}/subscription/${id}`,{
                method: 'DELETE',
                headers: {
                        Authorization: `Bearer ${authToken}`,
                        'Content-type':'application/json'
                      },
        });
        if(res.status == 401){
                 console.log("Error with auth")
        }
        if(res.status !== 200){
                throw new Error('Error on fetching person4');
        }
        return await res.json();
       
      }


return(<SubApiContext.Provider value={{
        listSubscriptions, getSubscription, createSubscription, deleteSub, editSubscription
}}>{children}</SubApiContext.Provider>)
}


export default SubApiContextProvider;

export const useSubApi = () => useContext(SubApiContext);