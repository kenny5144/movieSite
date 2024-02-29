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
  const [title, settitle]= useState("Action")


  return (
    <>
        <Nav/>
        <Flex>

      <Gernes settitle={settitle}/>
      <Games title={title} />
        </Flex>
    </>
  )
}

export default Main
