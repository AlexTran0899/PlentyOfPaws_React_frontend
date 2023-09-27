import {Flex, Heading, Spacer, Text,Divider } from "@chakra-ui/react";

const DogRowInfo = (props) => {
    const {title, value} = props
    console.log(props)
    return (
        <div style={{marginBottom: "30px"}}>
            <Flex>
                <Heading as='h2' size='sm' noOfLines={1} style={{marginBottom:"10px"}}>
                    {title}:
                </Heading>
                <Spacer/>
                <Text>{value}</Text>
            </Flex>
            <Divider />
        </div >

    )

}

export default DogRowInfo;