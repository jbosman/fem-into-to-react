export default async function fetchBreedList({queryKey}){

  const animal = queryKey[1];
  
  if(!animal) return [];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  if(!apiRes.ok){
    throw Error(`fetch breeds/${animal} not ok`)
  }

  return apiRes.json();
}