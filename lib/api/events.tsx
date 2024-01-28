import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";
import { PropsWithChildren, createContext, useContext } from "react";

const EventsApiContext = createContext({});

const EventApiContextProvider = ({ children }: PropsWithChildren ) => {
// @ts-ignore
        const { authToken } = useAuth();
        
        const listEvents = async () => {
                console.log("Czy auth", authToken)
           const res = await fetch(`${API_URL}/event`,{
               headers: {
                   Authorization: `Bearer ${authToken}`,
                 },
           });
           if(res.status == 401){
               throw new Error('Error with authorization');}
           if(res.status !== 200){
                   throw new Error('Error on fetching events');}
           return await res.json();
           
}

         const getEvent = async (id: string) => {
             console.log("Dlaczego nie przekazuje auth", authToken)
       const res = await fetch(`${API_URL}/event/${id}`,{
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

 const createEvent = async (data: {name: string, date: Date, decoration: boolean, vegeCount: number, meatCount: number, prePay: number, priceFull: number, notes: string, informationBarId: number}) => {
       console.log(data);
       const res = await fetch(`${API_URL}/event`,{
               method: 'POST',
               body: JSON.stringify(data),
               headers: {
                       Authorization: `Bearer ${authToken}`,
                       'Content-type':'application/json'
                     },
       });
       console.log("res", res)
       if(res.status == 401){
               throw new Error('Error with authorization');
       }
       if(res.status !== 200){
               throw new Error('Error on fetching events');
       }
       return await res.json();
      
}


 const editEvent=  async ({ id, data }: { id: string; data: {name: string, date: Date, decoration: boolean, vegeCount: number, meatCount: number, prePay: boolean, priceFull: number, notes: string}}) => {
       console.log("Informacje", JSON.stringify(data));
 const res = await fetch(`${API_URL}/event/${id}`,{
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

 const deleteEvent=  async (id: string) => {
       const res = await fetch(`${API_URL}/event/${id}`,{
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

        return(<EventsApiContext.Provider value={{
                listEvents, getEvent, createEvent, editEvent, deleteEvent
        }}>{children}</EventsApiContext.Provider>)
}


export default EventApiContextProvider;

export const useEventApi = () => useContext(EventsApiContext);
