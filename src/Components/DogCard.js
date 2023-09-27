import { Card, CardHeader, CardBody, CardFooter, Text, Button, Heading } from '@chakra-ui/react'
import axios from "axios";

function DogCard(props) {
  const dogData = props.dogData

  const deleteDog = (dog_id) => {
    console.log(dog_id)
    axios.delete(`https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/dogs/${dog_id}`)
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
          <Heading size='md'>{dogData.name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Age: {dogData.age}</Text>
          <Text>Breed: {dogData.breed}</Text>
          <Text>User ID (Lazy): {dogData.user_id}</Text>
        </CardBody>
        <CardFooter>
            <Button onClick={() => { deleteDog(dogData.dog_id)}}>Remove</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default DogCard;