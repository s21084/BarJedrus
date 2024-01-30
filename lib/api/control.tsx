import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";
import { PropsWithChildren, createContext, useContext } from "react";

const ControlApiContext = createContext({});

const ControlApiContextProvider = ({ children }: PropsWithChildren ) => {
// @ts-ignore
        const { authToken } = useAuth();
        
        const listToken = async () => {
                console.log("Czy auth", authToken)
           const res = await fetch(`${API_URL}/ControlToken`,{
               headers: {
                   Authorization: `Bearer ${authToken}`,
                 },
           });
           if(res.status == 401){
                console.log("Error with auth")}
           if(res.status !== 200){
                   console.log("Error with auth");}
           return await res.json();
           
}


 const deleteToken=  async (id: string) => {
       const res = await fetch(`${API_URL}/ControlToken/${id}`,{
               method: 'DELETE',
               headers: {
                       Authorization: `Bearer ${authToken}`,
                       'Content-type':'application/json'
                     },
       });
       console.log("res.status", res);
       if(res.status == 401){
                console.log("Error with auth")
       }
       if(res.status !== 200){
               throw new Error('Error on fetching');
       }
       return await res.json();
      
}

        return(<ControlApiContext.Provider value={{
                listToken,  deleteToken
        }}>{children}</ControlApiContext.Provider>)
}


export default ControlApiContextProvider;

export const useControlTokenApi = () => useContext(ControlApiContext);
