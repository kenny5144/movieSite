import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChakraProvider>

      <div>
        this is the begining of the game site 
      </div>
    </ChakraProvider>
    </>
  )
}

export default App
