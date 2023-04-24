import { Box, Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { useRouter } from 'next/router'
const axios = require('axios')

const TestPage = () => {
  const apiKey = '743f398782ef7a29bc5ce48df05749dd'
  const router = useRouter()
  const { toggleColorMode } = useColorMode()
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState([])
  const formBackground = useColorModeValue("gray.100", "gray.700")
  // const apiKey = process.argv[2] || 'YOUR_API_KEY'

  const sportKey = 'upcoming' // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports
  
  const regions = 'us' // uk | us | eu | au. Multiple can be specified if comma delimited
  
  const markets = 'h2h' // h2h | spreads | totals. Multiple can be specified if comma delimited
  
  const oddsFormat = 'decimal' // decimal | american
  
  const dateFormat = 'iso' // iso | unix
  
  const handleClick = () => {
    fetch(`https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&oddsFormat=american&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => setData(data))
  }

  axios.get('https://api.the-odds-api.com/v4/sports', {
    params: {
        apiKey
    }
  })
  .then(response => {
      console.log(response.data)
  })
  .catch(error => {
      console.log('Error status', error.response.status)
      console.log(error.response.data)
  })

  axios.get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
    params: {
        apiKey,
        regions,
        markets,
        oddsFormat,
        dateFormat,
    }
})
.then(response => {
    // response.data.data contains a list of live and 
    //   upcoming events and odds for different bookmakers.
    // Events are ordered by start time (live events are first)
    console.log(JSON.stringify(response.data))

    // Check your usage
    console.log('Remaining requests',response.headers['x-requests-remaining'])
    console.log('Used requests',response.headers['x-requests-used'])

})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})
  
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
        <Heading mb={6}>Test!</Heading>
      </Box>
      <Button onClick={handleClick}>Fetch odds data</Button>
      <Box bg={formBackground} p="4">
        {data.length > 0 && (
          <Heading>Displaying odds data here...</Heading>
        )}
      </Box>
      <Box>{markets}</Box>
    </Flex>
  )
}

export default TestPage