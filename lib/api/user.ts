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

export const createUser = async (data: {content: any}) => {
              console.log(data.content);
        const res = await fetch(`${API_URL}/user`,{
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
                throw new Error('Error on fetching events');
        }
        return await res.json();
       
}

