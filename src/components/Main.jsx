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

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['gernes'],
    queryFn: () =>
      fetch('https://api.rawg.io/api/genres?key=a9f46bc038fe4b49a1f24a8543740ba8')
        .then((res) => res.json()),
  })
  if(isLoading) return "loading....."
  if(error) return "an error has occured "+ error.message
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
