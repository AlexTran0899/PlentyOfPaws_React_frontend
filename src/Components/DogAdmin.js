import { SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";
import DogCard from '../Components/DogCard'

export default function DogAdmin() {
  const [dogs, setDogs] = useState()
  useEffect(() => {
    axios.get("https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/dogs/")
      .then(res => setDogs(res.data))
      .catch(e => console.log(e))
  }, []);

  return (
    <div className="DogAdmin" style={{ margin: "50px" }}>
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {dogs && dogs.map(eachDog => <DogCard dogData={eachDog} />)}
        </SimpleGrid>
      </div>
    </div>
  );
}