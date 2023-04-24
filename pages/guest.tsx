import { Box, Button, Flex, Heading, Image, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { useRouter } from 'next/router'

const GuestPage = () => {
  const apiKey = '743f398782ef7a29bc5ce48df05749dd'
  const sportKey = 'baseball_mlb' && 'icehockey_nhl' // 'basketball_nba' 'icehockey_nhl'
  const regionKey = 'us'
  const marketKey = 'h2h' // 'totals' 'spreads'
  const oddsFormatKey = 'american'
  const router = useRouter()
  const { toggleColorMode } = useColorMode()
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState([])
  const formBackground = useColorModeValue("gray.100", "gray.700")

  const handleClick = () => {
    fetch(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds/?regions=${regionKey}&markets=${marketKey}&oddsFormat=${oddsFormatKey}&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    fetch(`https://api.the-odds-api.com/v4/sports/?apiKey=${apiKey}`)
      .then(response => {
        const requestsUsed = response.headers.get('x-requests-used');
        const requestsRemaining = response.headers.get('x-requests-remaining');
        console.log(`Requests used: ${requestsUsed}`);
        console.log(`Requests remaining: ${requestsRemaining}`)
        console.log(data)
      })
  }, []);

  console.log(data)

  const handleHome = () => {
    router.push('/')
  }

  const handleTest = () => {
    router.push('/test')
  }

  const handleTemp = () => {
    router.push('/temp')
  }
  return (
    <Flex alignItems="center" justifyContent="center">
      <Image onClick={handleHome} boxSize='75px' borderRadius='full' position="absolute" top={2} left={2} cursor="pointer" src='https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/7JVZX7w1WO3FSm9lovCa_300x300.jpg'/>
      <Box position="absolute" top={90} left={2} cursor="pointer" onClick={handleTest}>Test</Box>
      <Box position="absolute" top={110} left={2} cursor="pointer" onClick={handleTemp}>Temp</Box>
      <Box p={12} rounded={6} background={formBackground}>
        <Heading mb={6}>Welcome, Guest!</Heading>
        <p>H2H</p>
        <Button onClick={handleClick}>Fetch odds data</Button>
        <table>
          {data.map((item) => (
            <tbody key={item.id}>
              <hr/>
              {item.home_team} vs. {item.away_team}
              <br/>
              <hr/>
              {item.bookmakers
              .filter((bookmaker) => 
              bookmaker.title === "Bet365" || 
              bookmaker.title === "BetMGM" ||
              bookmaker.title === "BetRivers" ||
              bookmaker.title === "Caesars" ||
              bookmaker.title === "DraftKings" ||
              bookmaker.title === "PointsBet (US)" ||
              bookmaker.title === "FanDuel"
              )
              .map((bookmaker) => (
                <tr key={bookmaker.id}>
                  {bookmaker.markets
                  .filter((market) => (
                    market.key === "h2h"
                    ))
                    // .sort((a, b) => b.item.bookmakers.markets.outcomes.price - a.item.bookmakers.markets.outcomes.price)
                  .map((market) => (
                    market.outcomes
                    .map((outcome) =>  (
                      <td key={outcome.id}>
                        {bookmaker.title} {outcome.price} {outcome.name}
                      </td>
                    ))
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </Box>
      <Box position="absolute" top={2} right={2} cursor="pointer" onClick={() => {
        toggleColorMode();
        setToggle(!toggle);
      }}>
        {toggle ? <IoMoon/> : <IoSunny/>}
      </Box>
    </Flex>
  )
}

export default GuestPage