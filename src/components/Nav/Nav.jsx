import React from 'react'
import logo from "../../assets/logo.webp"
import { Image } from '@chakra-ui/react'
import "./Nav.css"
import { FaSearch } from "react-icons/fa";
import { Input,Box } from '@chakra-ui/react';
import { Switch,IconButton } from '@chakra-ui/react'
import { InputGroup, InputLeftElement } from '@chakra-ui/react';


const Nav = () => {
  const handleSwitch=(e)=>{
    console.log("hello")
    console.log(e)
   
  }
  return (
    <div className='bg'>
      <div className='main'>

        <Image boxSize='5rem' src={logo} alt="page logo"/>
        <span className='search '>
        <InputGroup>
        <InputLeftElement pointerEvents='none'  >
 

        <IconButton  borderRadius='full'  />
    

        </InputLeftElement >
        <Input placeholder='Search for your games  ' borderRadius='full'
        />
        
        </InputGroup>
        </span>
        <span className='Darkmode'>

        <Switch id='darkMode' onChange={handleSwitch} />
        <label htmlFor="darkMode">Dark mode</label>
        </span>
      </div>
    </div>
  )
}

export default Nav
