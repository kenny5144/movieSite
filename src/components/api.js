import {
  
   
    useQuery,
  } from '@tanstack/react-query'
  const Base_Url="https://api.rawg.io/api"
  const Key="a9f46bc038fe4b49a1f24a8543740ba8"
export function Api(Endpoint, queryKey){

  return useQuery({
   queryKey: [queryKey],
   queryFn: async () =>{
    const url= `${Base_Url}/${Endpoint}?key=${Key}`
    console.log(url);

    const response = await fetch(url);
    return  await response.json();
    
     
    } 
  })
}