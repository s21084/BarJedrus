import { API_URL, authToken } from "./config";
export const listSubscriptions = async () => {
        
         //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo1M30.AGejMBePzXTCxieFvKZ3dqPFkwBVz4Lmlt5ogRbZWWw';
         console.log("lol");
       
            const res = await fetch(`${API_URL}/subscription`,{
                headers: {
                    Authorization: `Bearer ${authToken}`,
                  },
            });
            console.log(res);
       
            if(res.status == 401){
                throw new Error('Error with authorization');
        }
            if(res.status !== 200){
                    throw new Error('Error on fetching events');
            }
            
            return await res.json();
            
}

export const getSubscription = async (id: string) => {
        
        const res = await fetch(`${API_URL}/subscription/${id}`,{
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

export const createSubscription = async (data: {content: any}) => {
              console.log(data.content);
        const res = await fetch(`${API_URL}/subscription`,{
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