import { API_URL, authToken } from "./config";
export const listEvents = async () => {
        //Not working part
         const url = "http://localhost:3000/event";
         const authToken = '';
        //Not working part - END


                //Ta linijka po prostu działa
            //const res = await fetch(`${API_URL}/event`);



            //Not working part
        //     const res = await fetch(url,{
        //         headers: {
        //             Authorization: `Bearer ${authToken}`
        //           },
        //     });
            //Wersja B
            const res = await fetch(url,{
                
            });
        
            //Not working part - END


            
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

export const createEvent = async (data: {content: string}) => {
              
        const res = await fetch(`${API_URL}/event`,{
                method: 'POST',
                body: JSON.stringify(data),
        });
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