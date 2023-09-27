import '../App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from '../Components/UserCard'
import {
  SimpleGrid, FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  AbsoluteCenter
} from '@chakra-ui/react';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const defaultFormData = {
  username: "",
  password: "",
  contact_phone: "",
  role: "",
}
const UserForm = () => {
  const history = useHistory();
  const [users, setUsers] = useState()
  const [formData, setFormData] = useState(defaultFormData)
  useEffect(() => {
    axios.get("https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/auth/getall")
      .then(res => setUsers(res.data))
      .catch(e => console.log(e))
  }, []);

  const onSubmit = e => {
    e.preventDefault()
    console.log(formData)
    axios.post("https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/auth/register", formData)
      .then(res => {
        console.log("here")
        users.push(formData)
        setFormData(defaultFormData)
        
      })
      .catch(e => console.log(e))

      history.push('/main')
      window.location.reload(true)
  }

  const onChange = e => {
    const { name, value } = e.target
    console.log(e.target.value)
    setFormData(prev => ({ ...prev, [name]: value }))
  }

    return (
      

      <div className="UserForm" style={{ margin: "50px" }}>
        
        {/* <Button onClick={() => {history.push("/main"); window.location.reload(true);}}>Main</Button> */}
        <header className="App-header">

          <div style={{width:"100vw", paddingBottom:"100vh"}}>
          <AbsoluteCenter axis="both">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p='10'>
          <form onSubmit={onSubmit}>

            <FormControl >
              <FormControl >
                <FormLabel>Username</FormLabel>
                <Input
                  focusBorderColor='pink.400'
                  placeholder='Here is a sample placeholder'
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  focusBorderColor='pink.400'
                  placeholder='Here is a sample placeholder'
                  type="password"
                  value={formData.password}
                  name="password"
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Contact Phone Number</FormLabel>
                <Input
                  focusBorderColor='pink.400'
                  placeholder='Here is a sample placeholder'
                  type="contact_phone"
                  value={formData.contact_phone}
                  name="contact_phone"
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input
                  focusBorderColor='pink.400'
                  placeholder='Here is a sample placeholder'
                  type="role"
                  value={formData.role}
                  name="role"
                  onChange={onChange}
                />
              </FormControl>
            </FormControl>
            <Button
              mt={4}
              colorScheme='teal'
              type='submit'
            >
                Submit
            </Button>



          </form>
          </Box>
          </Box>
          </AbsoluteCenter>
          </div>
        </header>

        {/* <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {users && users.map(eachUser => <UserCard userData={eachUser} />)}
          </SimpleGrid>
          </div> */}

      
      </div>
  );
}

export default UserForm;
