import { useState, useEffect } from 'react';

import Pet from './Pet';

const ANIMALS = [ "bird", "cat", "dog", "rabbit", "reptile" ];

function SearchParams(){
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  
  useEffect(() => { 
    requestPets(); 
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets(){
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form 
        onSubmit={ e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)} 
            id="location"
            value={location} 
            placeholder="Location" 
          />
        </label>
        <label htmlFor="animal">
          Animanl
          <select
            onChange={(e) => {
                setAnimal(e.target.value);
                setBreed("");
              } 
            }
            id="animal"
            value={animal} 
          >
            <option/>
            { ANIMALS.map( animal => <option key={animal}>{animal}</option> ) }
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            onChange={(e) => setBreed(e.target.value)}
            disabled={breeds.length === 0} 
            id="breed"
            value={breed} 
          >
            <option/>
            { breeds.map( breed => <option key={breed}>{breed}</option> ) }
          </select>
        </label>
        <button>Submit</button>
        {
          pets.map( (pet) => (
            <Pet
              key={pet.id}
              name={pet.name} 
              animal={pet.animal} 
              breed={pet.breed} 
            /> 
          ))
        }
      </form>
    </div>
  );
}

export default SearchParams;