import { Box, Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { useRouter } from 'next/router'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  const [toggle, setToggle] = useState(false)
  const router = useRouter()

  const formBackground = useColorModeValue("gray.100", "gray.700")

  const handleContinueAsGuest = () => {
    router.push('/guest')
  }

  return (
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
      </Flex>
    </Flex>
  )
}

export default IndexPage
