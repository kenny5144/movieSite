import {
  
   
    useQuery,
  } from '@tanstack/react-query'
  const Base_Url="https://api.rawg.io/api"
  const Key="a9f46bc038fe4b49a1f24a8543740ba8"
export function Api(Endpoint, queryKey){

  return useQuery({
   queryKey: [queryKey],
   queryFn: async () =>{

    const response = await fetch(`${Base_Url}/${Endpoint}?key=${Key}`);
    const data = await response.json();
    
    // log data to check its value (remove it after the issue is fixed)
    console.log(data);
    
    return data;
     
    } 
  })
}