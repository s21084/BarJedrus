import { API_URL, authToken } from "./config";
export const listEvents = async () => {
        
         //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo1M30.AGejMBePzXTCxieFvKZ3dqPFkwBVz4Lmlt5ogRbZWWw';
        
            const res = await fetch(`${API_URL}/event`,{
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

export const getEvent = async (id: string) => {
              
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

export const createEvent = async (data: {name: string, date: Date, decoration: boolean, vegeCount: number, meatCount: number, prePay: number, priceFull: number, notes: string, informationBar: 1}) => {
        console.log(data);
        const res = await fetch(`${API_URL}/event`,{
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


export const editEvent=  async ({ id, data }: { id: string; data: {name: string, date: Date, decoration: boolean, vegeCount: number, meatCount: number, prePay: boolean, priceFull: number, notes: string}}) => {
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

export const deleteEvent=  async (id: string) => {
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