import '../App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from '../Components/UserCard'
import {
  SimpleGrid, FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

import { BrowserRouter as Link } from 'react-router-dom';


const defaultuploadData = {
  username: "",
  password: "",
  contact_phone: "",
  role: "",
}
const UserForm = () => {

  const [users, setUsers] = useState()
  const [uploadData, setuploadData] = useState(defaultuploadData)
  useEffect(() => {
    axios.get("https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/auth/getall")
      .then(res => setUsers(res.data))
      .catch(e => console.log(e))
  }, []);

  const onSubmit = e => {
    e.preventDefault()
    console.log(uploadData)
    axios.post("https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/auth/register", uploadData)
      .then(res => {
        console.log("here")
        users.push(uploadData)
        setuploadData(defaultuploadData)
      })
      .catch(e => console.log(e))
  }

  const onChange = e => {
    const { name, value } = e.target
    console.log(e.target.value)
    setuploadData(prev => ({ ...prev, [name]: value }))
  }

    return (
      <div className="App" style={{ margin: "50px" }}>
        <header className="App-header">
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {users && users.map(eachUser => <UserCard userData={eachUser} />)}
          </SimpleGrid>
          <form onSubmit={onSubmit}>

            <FormControl >
              <FormControl >
                <FormLabel>username</FormLabel>
                <Input
                  focusBorderColor='pink.400'
                  placeholder='Here is a sample placeholder'
                  type="text"
                  name="username"
                  value={uploadData.username}
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>password</FormLabel>
                <Input
                  focusBorderColor='pink.400'
                  placeholder='Here is a sample placeholder'
                  type="password"
                  value={uploadData.password}
                  name="password"
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>contact phone number</FormLabel>
                <Input
                  focusBorderColor='pink.400'
                  placeholder='Here is a sample placeholder'
                  type="contact_phone"
                  value={uploadData.contact_phone}
                  name="contact_phone"
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>role</FormLabel>
                <Input
                  focusBorderColor='pink.400'
                  placeholder='Here is a sample placeholder'
                  type="role"
                  value={uploadData.role}
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
              <Link to="/main">
                Submit
              </Link>
            </Button>



          </form>
        </header>
      </div>
  );
}

export default UserForm;
