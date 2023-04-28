import { Box, Button, Flex, Heading, Image, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { useRouter } from 'next/router'
import Head from 'next/head'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const [toggle, setToggle] = useState(false)
  const router = useRouter()

  const formBackground = useColorModeValue("gray.100", "gray.700")

  const handleContinueAsGuest = () => {
    router.push('/guest')
  }

  return (
    <>
    <Box justifyContent="center" alignItems="center">
      <Heading size="2xl" textAlign="center">Odd Bets</Heading>
    </Box>
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="example@email.com" variant="filled" mb={3} type="email" />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal">Log in</Button>
        <Button mb={6} colorScheme="blue" onClick={handleContinueAsGuest}>Continue as Guest</Button>
        <Box position="absolute" top={2} right={2} cursor="pointer" onClick={() => {
          toggleColorMode();
          setToggle(!toggle);
        }}>
          {toggle ? <IoMoon/> : <IoSunny/>}
        </Box>
        <Image boxSize='75px' borderRadius='full' position="absolute" top={3} left={5} cursor="pointer" src='https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/7JVZX7w1WO3FSm9lovCa_300x300.jpg'/>
      </Flex>
    </Flex>
    </>
  )
}

export default IndexPage
