import { API_URL } from './config';


export const listDishNoLog = async () => {
        
     const res = await fetch(`${API_URL}/notLog/dish/menu`);

     if(res.status == 401){
          console.log("Error with auth")
 }
     if(res.status !== 200){
             throw new Error('Error on fetching dish2');
     }
     
     return await res.json();
     
}

export const getDayDishNoLog = async () => {
        const id = 1
  const res = await fetch(`${API_URL}/notLog/dayDish/${id}`);

  if(res.status == 401){
       console.log("Error with auth")
}
  if(res.status !== 200){
          throw new Error('Error on fetching dish2');
  }
  
  return await res.json();
  
}

export const getInfoBarNoLog = async () => {
  const id = 1
  const res = await fetch(`${API_URL}/notLog/barInfo/${id}`);

  if(res.status == 401){
       console.log("Error with auth")
}
  if(res.status !== 200){
          throw new Error('Error on fetching dish2');
  }
  
  return await res.json();
  
}

