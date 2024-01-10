import { API_URL, authToken } from "./config";
export const listUsers = async () => {
        
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

export const getUser = async (id: string) => {
              
        const res = await fetch(`${API_URL}/user/${id}`,{
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

export const editUser =  async ({ id, data }: { id: string; data: {email: string, isAdmin: boolean, isVerified: boolean}}) => {
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


