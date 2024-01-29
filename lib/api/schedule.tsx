import { API_URL } from "./config";
import { useAuth } from "../../context/AuthContext";
import { PropsWithChildren, createContext, useContext } from "react";


const SchedulesApiContext = createContext({});

const ScheduleApiContextProvider = ({ children }: PropsWithChildren ) => {
        // @ts-ignore
                const { authToken } = useAuth();



 const listSchedule = async () => {
        
            const res = await fetch(`${API_URL}/schedule`,{
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

 const getSchedule = async (id: string) => {
              
        const res = await fetch(`${API_URL}/schedule/id/${id}`,{
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

 const getScheduleByUser = async (id: string) => {
              
        const res = await fetch(`${API_URL}/schedule/user/${id}`,{
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

 const createSchedule = async (data: {
        startHour:Date,
        endHour:Date,
        weekDayNumber: Number,
        userId: Number,
        informationBarId: Number
}) => {

        const res = await fetch(`${API_URL}/schedule`,{
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
                throw new Error('Error on fetching events');
        }
        return await res.json();
       
}



const editSchedule=  async ({ id, data }: { id: string; data: {
        startHour:Date,
        endHour:Date,
        weekDayNumber: Number,
        userId: Number,
        informationBarId: Number}}) => {
        console.log("Informacje", JSON.stringify(data));
  const res = await fetch(`${API_URL}/schedule/${id}`,{
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

return(<SchedulesApiContext.Provider value={{
        listSchedule, getSchedule, getScheduleByUser, createSchedule, editSchedule
}}>{children}</SchedulesApiContext.Provider>)
}


export default ScheduleApiContextProvider;

export const useScheduleApi = () => useContext(SchedulesApiContext);