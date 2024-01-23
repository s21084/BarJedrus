import { PropsWithChildren, createContext, useContext } from "react";
import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";

const AdressApiContet = createContext({});



const AdressApiContetProvider = ({ children }: PropsWithChildren ) => {
        // @ts-ignore
        const { authToken } = useAuth();

         const listAdresss = async () => {
        
                //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo1M30.AGejMBePzXTCxieFvKZ3dqPFkwBVz4Lmlt5ogRbZWWw';
               
                   const res = await fetch(`${API_URL}/adress`,{
                       headers: {
                           Authorization: `Bearer ${authToken}`,
                         },
                   });
              
                   if(res.status == 401){
                       throw new Error('Error with authorization');
               }
                   if(res.status !== 200){
                           throw new Error('Error on fetching adresss');
                   }
                   
                   return await res.json();
                   
       }
       
        const getAdress = async (id: string) => {
                     
               const res = await fetch(`${API_URL}/adress/${id}`,{
                       headers: {
                               Authorization: `Bearer ${authToken}`,
                             },  
               });
               if(res.status == 401){
                       throw new Error('Error with authorization');
               }
               if(res.status !== 200){
                       throw new Error('Error on fetching adresss');
               }
               return await res.json();
              
       }
       
        const createAdress = async (data: {Street: string, HomeNumber: string, FlatNumber: string, City: string}) => {
               console.log(data);
               const res = await fetch(`${API_URL}/adress`,{
                       method: 'POST',
                       body: JSON.stringify(data),
                       headers: {
                               Authorization: `Bearer ${authToken}`,
                               'Content-type':'application/json'
                             },
               });
               
               if(res.status == 401){
                       throw new Error('Error with authorization');
               }
               if(res.status !== 200){
                       throw new Error('Error on fetching adresss');
               }
               return await res.json();
              
       }
       
       
        const editAdress=  async ({ id, data }: { id: string; data: {Street: string, HomeNumber: string, FlatNumber: string, City: string}}) => {
               console.log("Informacje", JSON.stringify(data));
         const res = await fetch(`${API_URL}/adress/${id}`,{
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
                 throw new Error('Error on fetching');
         }
         return await res.json();
        
       }
       
        const deleteAdress=  async (id: string) => {
               const res = await fetch(`${API_URL}/adress/${id}`,{
                       method: 'DELETE',
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
                       throw new Error('Error on fetching');
               }
               return await res.json();
              
             }

        return(<AdressApiContet.Provider value={{
                listAdresss, deleteAdress, editAdress, createAdress, getAdress
        }}>{children}</AdressApiContet.Provider>)
}

export default AdressApiContetProvider;

export const useAdressApi = () => useContext(AdressApiContet);