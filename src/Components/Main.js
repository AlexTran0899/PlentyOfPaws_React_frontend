import {Button, Card, Flex} from '@chakra-ui/react';
import { BrowserRouter as Router, NavLink, useHistory } from 'react-router-dom';
import {useEffect, useState} from "react";
import DogCardDisplay from './DogCardDisplay';

import { Menu, MenuButton, MenuList, MenuItem, Box, AbsoluteCenter, SimpleGrid } from '@chakra-ui/react'
import axios from "axios";

const Main = () => {

    const history = useHistory();
    const [dogs, setDogs] = useState()

    useEffect(() => {
        axios.get("https://plentyofpaws-bdf318f59ef7.herokuapp.com/api/dogs").then(res => {
            setDogs(res.data)})
            .catch(e => console.log(e))
    }, []);

    return (
        <div>
            <Flex>
                {dogs && dogs.map(dog => {
                    return(
                        <Box p='5'>
                            <DogCardDisplay dog={dog}/>
                        </Box>
                    )
                })}
            </Flex>
        </div>
    );
}

export default Main;