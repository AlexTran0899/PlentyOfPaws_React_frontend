import { SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from '../Components/UserCard'

export default function UserAdmin() {
  const [users, setUsers] = useState()
  useEffect(() => {
    axios.get("https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/auth/getall")
      .then(res => setUsers(res.data))
      .catch(e => console.log(e))
  }, []);

  return (
    <div className="UserAdmin" style={{ margin: "50px" }}>
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {users && users.map(eachUser => <UserCard userData={eachUser} />)}
        </SimpleGrid>
      </div>
    </div>
  );
}