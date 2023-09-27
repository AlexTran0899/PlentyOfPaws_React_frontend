import '../App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import DogCard from './DogCard'
import {
  SimpleGrid, FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  AbsoluteCenter
} from '@chakra-ui/react';

import { BrowserRouter as Link, useHistory} from 'react-router-dom';


const defaultDogData = {
  user_id: "",
  name: "",
  age: "",
  breed: "",
}
const DogForm = () => {
  const history = useHistory();

  const [dogs, setDogs] = useState()
  const [DogData, setDogData] = useState(defaultDogData)
  useEffect(() => {
    axios.get("https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/dogs/")
      .then(res => setDogs(res.data))
      .catch(e => console.log(e))
  }, []);

  const onSubmit = e => {
    e.preventDefault()
    console.log(DogData)
    axios.post("https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/dogs/", DogData)
      .then(res => {
        dogs.push(DogData)
        setDogData(defaultDogData)
      })
      .catch(e => console.log(e))
      history.push('/')
      window.location.reload(true)
  }

  const onChange = e => {
    const { name, value } = e.target
    console.log(e.target.value)
    setDogData(prev => ({ ...prev, [name]: value }))
  }

    return (
      <div className="DogForm" style={{ margin: "50px" }}>
        <header className="DogForm-header"> 

            <div style={{width:"100vw", height:"100vh"}}>
            <AbsoluteCenter axis="both">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p='10'>

            <form onSubmit={onSubmit}>

              <FormControl >
                <FormControl >
                  <FormLabel>Owner ID</FormLabel>
                  <Input
                    focusBorderColor='pink.400'
                    placeholder='Here is a sample placeholder'
                    type="text"
                    name="user_id"
                    value={DogData.user_id}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    focusBorderColor='pink.400'
                    placeholder='Here is a sample placeholder'
                    type="name"
                    value={DogData.name}
                    name="name"
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Breed</FormLabel>
                  <Input
                    focusBorderColor='pink.400'
                    placeholder='Here is a sample placeholder'
                    type="breed"
                    value={DogData.breed}
                    name="breed"
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Age</FormLabel>
                  <Input
                    focusBorderColor='pink.400'
                    placeholder='Here is a sample placeholder'
                    type="age"
                    value={DogData.age}
                    name="age"
                    onChange={onChange}
                  />
                </FormControl>
              </FormControl>
              <Button
                mt={4}
                colorScheme='teal'
                type='submit'
              >
                
                  Add Dog
              
              </Button>



            </form>
            </Box>
            </Box>
            </AbsoluteCenter>
            </div>
        </header>
        
        {/* <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {dogs && dogs.map(eachDog => <DogCard dogData={eachDog} />)}
          </SimpleGrid>
        </div> */}
      </div>
      

  );
}

export default DogForm;
