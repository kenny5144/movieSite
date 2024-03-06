import React from 'react'
import Nav from './Nav/Nav'
import Gernes from './Gernes/Gernes'
import Games from './Games'
import { useState } from 'react'
import { Text,Box, Flex, Image } from '@chakra-ui/react'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const Main = () => {
  const [title, settitle]= useState("All")
  const [GameData, setGameData] = useState();


  return (
    <>
        <Nav/>
        <Flex>

      <Gernes settitle={settitle} setGameData={setGameData}/>
      <Games GameData={GameData} settitle={settitle} setGameData={setGameData} title={title} />
      
        </Flex>
    </>
  )
}

export default Main
