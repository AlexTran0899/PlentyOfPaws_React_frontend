import { Card, CardHeader, CardBody, CardFooter, Text, Button, Heading } from '@chakra-ui/react'
import axios from "axios";

function UserCard(props) {
  const userData = props.userData

  const deleteUser = (user_id) => {
    console.log(user_id)
    axios.delete(`https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/auth/delete/${user_id}`)
      .then(res => {
        if (res.data.success) {
          console.log(res.data.message);
          // Optionally, update the UI or redirect the user
        } else {
          console.error(res.data.message);
        }
      })
      .catch(e => console.log(e));
    window.location.reload(true)
  }

  return (
      <div>
        <Card>
          <CardHeader>
            <Heading size='md'>{userData.username}</Heading>
          </CardHeader>
          <CardBody>
            <Text>Password: {userData.password}</Text>
            <Text>Contact Phone: {userData.contact_phone}</Text>
            
          </CardBody>
          <CardFooter>
            <Button onClick={() => { deleteUser(userData.user_id) }}>Remove</Button>
          </CardFooter>
        </Card>
      </div>
    )
}

export default UserCard;