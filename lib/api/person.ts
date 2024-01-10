import { API_URL, authToken } from "./config";
export const listPerson= async () => {
        
         //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo1M30.AGejMBePzXTCxieFvKZ3dqPFkwBVz4Lmlt5ogRbZWWw';
        
            const res = await fetch(`${API_URL}/person`,{
                headers: {
                    Authorization: `Bearer ${authToken}`,
                  },
            });
       
            if(res.status == 401){
                throw new Error('Error with authorization');
        }
            if(res.status !== 200){
                    throw new Error('Error on fetching person2');
            }
            
            return await res.json();
            
}

export const getPerson=  async (id: string) => {
                               
        const res = await fetch(`${API_URL}/person/${id}`,{
                headers: {
                        Authorization: `Bearer ${authToken}`,
                      },  
        });
        if(res.status == 401){
                throw new Error('Error with authorization');
        }
        if(res.status !== 200){
                throw new Error('Error on fetching person3');
        }
        return await res.json();
       
}

export const createPerson=  async (data: {name: string, surname: string, phone: string}) => {
              console.log("Informacje ", JSON.stringify(data));
        const res = await fetch(`${API_URL}/person`,{
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
                throw new Error('Error on fetching person4');
        }
        return await res.json();
       
}



export const editPerson=  async ({ id, data }: { id: string; data: {name: string, surname: string, phone: string}}) => {
              console.log("Informacje", JSON.stringify(data));
        const res = await fetch(`${API_URL}/person/${id}`,{
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
                throw new Error('Error on fetching person4');
        }
        return await res.json();
       
}

export const deletePerson=  async (id: string) => {
  const res = await fetch(`${API_URL}/person/${id}`,{
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
          throw new Error('Error on fetching person4');
  }
  return await res.json();
 
}