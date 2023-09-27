import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
    Box,
    Flex,
    Image,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Text,
    CardFooter,
    Button,
    Spacer
} from "@chakra-ui/react";
import DogRowInfo from './DogRowInfo'

const DogInfoPage = () =>{
    const [dog, setDog] = useState()
    const { dog_id } = useParams()
    useEffect(() => {
        axios.get(`https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/dogs/${dog_id}`)
            .then(res => setDog(res.data))
            .catch(e => console.log(e))
    }, []);
    useEffect(() => {
        console.log(dog)
    },[dog])
    return (
        <div style={{display:"flex", width: "100vw"}}>
                <div style={{width: "100vw"}}>
                    {dog?.images && dog.images.map(image => {
                        return (
                                <img style={{width: "100vw"}}src={image.image_url} alt='Dan Abramov' />
                        )
                    })
                    }
                </div>
                <Box p='5'>
                    <Card>
                        <CardHeader>
                            <Heading size='3xl'> {dog?.name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Heading as='h2' size='md' noOfLines={1} style={{marginBottom:"10px"}}>
                                Description:
                            </Heading>
                            <Text style={{marginBottom:"50px"}}>{dog?.description}</Text>

                            <DogRowInfo title="Breed" value={dog?.breed} />
                            <DogRowInfo title="Age" value={dog?.age + " year(s) old"} />
                            <DogRowInfo title="Energy Level" value={dog?.energy_level} />
                            <DogRowInfo title="Maintenance Level" value={dog?.maintenance_level} />
                        </CardBody>
                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>Get in Contact</Button>
                        </CardFooter>
                    </Card>
                </Box>
        </div>
    )
}
export default DogInfoPage