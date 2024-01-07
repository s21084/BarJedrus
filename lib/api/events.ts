import { API_URL, authToken } from "./config";
export const listEvents = async () => {
            
            const res = await fetch(`${API_URL}/event`);
            // const res = await fetch(url,{
            //     headers: {
            //         Authorization: `Bearer ${authToken}`
            //       },
            // });
            if(res.status !== 200){
                    throw new Error('Error on fetching events');
            }
            return await res.json();
            
}

export const getEvent = async (id: string) => {
              
        const res = await fetch(`${API_URL}/event/${id}`);
        // const res = await fetch(url,{
        //     headers: {
        //         Authorization: `Bearer ${authToken}`
        //       },
        // });
        if(res.status !== 200){
                throw new Error('Error on fetching events');
        }
        return await res.json();
       
}