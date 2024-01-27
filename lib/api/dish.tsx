import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";
import { PropsWithChildren, createContext, useContext } from "react";

const DishsApiContext = createContext({});

const DishApiContextProvider = ({ children }: PropsWithChildren ) => {
// @ts-ignore
        const { authToken } = useAuth();
        

         const listDish= async () => {
        
                //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo1M30.AGejMBePzXTCxieFvKZ3dqPFkwBVz4Lmlt5ogRbZWWw';
               
                   const res = await fetch(`${API_URL}/dish`,{
                       headers: {
                           Authorization: `Bearer ${authToken}`,
                         },
                   });
              
                   if(res.status == 401){
                       throw new Error('Error with authorization');
               }
                   if(res.status !== 200){
                           throw new Error('Error on fetching dish2');
                   }
                   
                   return await res.json();
                   
       }
       
        const getDish=  async (id: string) => {
                                      
               const res = await fetch(`${API_URL}/dish/${id}`,{
                       headers: {
                               Authorization: `Bearer ${authToken}`,
                             },  
               });
               if(res.status == 401){
                       throw new Error('Error with authorization');
               }
               if(res.status !== 200){
                       throw new Error('Error on fetching dish3');
               }
               return await res.json();
              
       }
       
        const createDish=  async (data: {name: string, priceForPiece: number, priceForWeight: number}) => {
               data.priceForPiece.valueOf
                     console.log("Informacje", JSON.stringify(data));
               const res = await fetch(`${API_URL}/dish`,{
                       method: 'POST',
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
                       throw new Error('Error on fetching dish4');
               }
               return await res.json();
              
       }
       
       
       
        const editDish=  async ({ id, data }: { id: string; data: {name: string, priceForPiece: number, priceForWeight: number}}) => {
                     console.log("Informacje", JSON.stringify(data));
               const res = await fetch(`${API_URL}/dish/${id}`,{
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
                       throw new Error('Error on fetching dish4');
               }
               return await res.json();
              
       }
       
        const deleteDish=  async (id: string) => {
         const res = await fetch(`${API_URL}/dish/${id}`,{
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
                 throw new Error('Error on fetching dish4');
         }
         return await res.json();
        
       }
       
       

        return(<DishsApiContext.Provider value={{
                listDish, getDish, createDish, editDish, deleteDish
        }}>{children}</DishsApiContext.Provider>)
}


export default DishApiContextProvider;

export const useDishApi = () => useContext(DishsApiContext);




