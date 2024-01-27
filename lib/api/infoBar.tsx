import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";
import { PropsWithChildren, createContext, useContext } from "react";

const InfoBarApiContext = createContext({});

const InfoBarApiContextProvider = ({ children }: PropsWithChildren ) => {
// @ts-ignore
        const { authToken } = useAuth();
        console.log(authToken)
       
        const getInfoBar=  async (id: string) => {
                console.log("GetInfoBar w środku");                          
               const res = await fetch(`${API_URL}/infoBar/${id}`,{
                       headers: {
                               Authorization: `Bearer ${authToken}`,
                             },  
               });
               if(res.status == 401){
                       throw new Error('Error with authorization');
               }
               if(res.status !== 200){
                       throw new Error('Error on fetching infoBar3');
               }
               return await res.json();
              
       }
       
       
       
       
        const editInfoBar=  async (data: {startHour: string, endHour: number, bonusNote: string}) => {
                     console.log("Get info bar Informacje edytowane", JSON.stringify(data));
               const res = await fetch(`${API_URL}/infoBar/1`,{
                       method: 'PUT',
                       body: JSON.stringify(data),
                       headers: {
                               Authorization: `Bearer ${authToken}`,
                               'Content-type':'application/json'
                             },
               });
               console.log("res.status", res);
               if(res.status == 401){
                       throw new Error('Error with authorization');
               }
               if(res.status !== 200){
                       throw new Error('Error on fetching infoBar4');
               }
               return await res.json();
              
       }
       
       
       

        return(<InfoBarApiContext.Provider value={{
                getInfoBar, editInfoBar
        }}>{children}</InfoBarApiContext.Provider>)
}


export default InfoBarApiContextProvider;

export const useInfoBarApi = () => useContext(InfoBarApiContext);




