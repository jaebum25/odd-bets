import { Box, Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { useRouter } from 'next/router'
const axios = require('axios')

const TempPage = () => {
  const router = useRouter()
  const { toggleColorMode } = useColorMode()
  const [toggle, setToggle] = useState(false)
  const formBackground = useColorModeValue("gray.100", "gray.700")
  
  const handleHome = () => {
    router.push('/')
  }

  const handleGuest = () => {
    router.push('/guest')
  }

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box position="absolute" top={2} left={2} cursor="pointer" onClick={handleHome}>logo</Box>
      <Box position="absolute" top={8} left={2} cursor="pointer" onClick={handleGuest}>Guest</Box>
      <Box position="absolute" top={2} right={2} cursor="pointer" onClick={() => {
        toggleColorMode();
        setToggle(!toggle);
      }}>
        {toggle ? <IoMoon/> : <IoSunny/>}
      </Box>
      <Box p={12} rounded={6} background={formBackground}>
        <Heading mb={6}>Temp!</Heading>
      </Box>
    </Flex>
  )
}

export default TempPage