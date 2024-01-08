import { API_URL, authToken } from "./config";
export const listEvents = async () => {
        
         //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo1M30.AGejMBePzXTCxieFvKZ3dqPFkwBVz4Lmlt5ogRbZWWw';
        
            const res = await fetch(`${API_URL}/event`,{
                headers: {
                    Authorization: `Bearer ${authToken}`,
                  },
            });
       

            if(res.status !== 200){
                    throw new Error('Error on fetching events');
            }
            return await res.json();
            
}

export const getEvent = async (id: string) => {
              
        const res = await fetch(`${API_URL}/event/${id}`,{
                headers: {
                        Authorization: `Bearer ${authToken}`,
                      },  
        });
        if(res.status !== 200){
                throw new Error('Error on fetching events');
        }
        return await res.json();
       
}

export const createEvent = async (data: {content: string}) => {
              
        const res = await fetch(`${API_URL}/event`,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                        Authorization: `Bearer ${authToken}`,
                      },
        });
        if(res.status !== 200){
                throw new Error('Error on fetching events');
        }
        return await res.json();
       
}