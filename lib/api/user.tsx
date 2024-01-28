import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";
import { PropsWithChildren, createContext, useContext } from "react";

const UsersApiContext = createContext({});

const UserApiContextProvider = ({ children }: PropsWithChildren ) => {
        // @ts-ignore
                const { authToken } = useAuth();

                const listUsers = async () => {
        
                        //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo1M30.AGejMBePzXTCxieFvKZ3dqPFkwBVz4Lmlt5ogRbZWWw';
                       
                           const res = await fetch(`${API_URL}/user`,{
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
               
                const getUser = async (id: string) => {
                             
                       const res = await fetch(`${API_URL}/user/id/${id}`,{
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
                const getUserByEmail = async (email: string) => {
                             console.log("Czy wgl tu wchodzi?")
                       const res = await fetch(`${API_URL}/user/email/${email}`,{
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
               
                const editUser =  async ({ id, data }: { id: string; data: {email: string, isAdmin: boolean, isVerified: boolean, personId: number }}) => {
                       console.log("Tu wchodze", data);
                 const res = await fetch(`${API_URL}/user/${id}`,{
                         method: 'PUT',
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
                         throw new Error('Error on fetching events');
                 }
                 return await res.json();
                
               }

return(<UsersApiContext.Provider value={{
        listUsers, getUser, getUserByEmail, editUser
}}>{children}</UsersApiContext.Provider>)
}


export default UserApiContextProvider;

export const useUserApi = () => useContext(UsersApiContext);
