import {Card,
CardBody,
Image,
Stack,
Heading,
Text,
Divider,
CardFooter,
ButtonGroup,
Button} from "@chakra-ui/react";
import {useHistory} from "react-router-dom";
import {useState} from "react";



const DogCardDisplay = (props) => {
    const {name,description,cost,images, dog_id} = props.dog
    const history = useHistory()
    return (
        <Card maxW='lg'>
            <CardBody>
                <Image
                    src={images[0]?.image_url}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {cost}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'
                    onClick={()=> {
                        history.push(`/dogs/${dog_id}`)
                        window.location.reload(true)
                    }}>
                        Adopt
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default DogCardDisplay;