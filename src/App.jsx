import { useState } from 'react'
import Main from './components/Main'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient= new QueryClient()

function App() {
  
  return (
    <>

    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
     <Main/>
    </ChakraProvider>
    </QueryClientProvider>

    </>
  )
}

export default App
