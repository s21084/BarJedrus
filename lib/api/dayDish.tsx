import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";
import { PropsWithChildren, createContext, useContext } from "react";


const DayDishsApiContext = createContext({});

const DayDishApiContetProvider = ({ children }: PropsWithChildren ) => {

        const { authToken } = useAuth();
        

    
 const listDayDish= async () => {
        
        //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo1M30.AGejMBePzXTCxieFvKZ3dqPFkwBVz4Lmlt5ogRbZWWw';
       
           const res = await fetch(`${API_URL}/dayDish`,{
               headers: {
                   Authorization: `Bearer ${authToken}`,
                 },
           });
      
           if(res.status == 401){
               throw new Error('Error with authorization');
       }
           if(res.status !== 200){
                   throw new Error('Error on fetching dayDish');
           }
           
           return await res.json();
           
}

 const getDayDish=  async (id: string) => {          
       const res = await fetch(`${API_URL}/dayDish/${id}`,{
               headers: {
                       Authorization: `Bearer ${authToken}`,
                     },  
       });
       if(res.status == 401){
               throw new Error('Error with authorization');
       }
       if(res.status !== 200){
               throw new Error('Error on fetching dayDish');
       }
       return await res.json();
      
}

 const createDayDish=  async (data: {content: any}) => {
             console.log(data.content);
       const res = await fetch(`${API_URL}/dayDish`,{
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
               throw new Error('Error on fetching dayDish');
       }
       return await res.json();
      
}

 const editDayDish=  async ({ id, data }: { id: string; data: {soup: string, secondDish: string}}) => {
       console.log("Informacje", JSON.stringify(data));
 const res = await fetch(`${API_URL}/dayDish/${id}`,{
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
       

        return(<DayDishsApiContext.Provider value={{
                listDayDish, getDayDish, createDayDish, editDayDish
        }}>{children}</DayDishsApiContext.Provider>)
}


export default DayDishApiContetProvider;

export const useDayDishApi = () => useContext(DayDishsApiContext);







