import { AbsoluteCenter, Box, Button, Flex, Heading, Image, Input, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { useRouter } from 'next/router'

const GuestPage = () => {
  const apiKey = '743f398782ef7a29bc5ce48df05749dd'
  // const sportKey = 'baseball_mlb' && 'icehockey_nhl' // 'basketball_nba' 'icehockey_nhl'
  
  const [sportKey, setSportKey] = useState('baseball_mlb');
  const toggleSport = (sport) => {
    setSportKey(sport);
  }

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
      <Flex position="absolute" top={5}>
        {/* <Button onClick={handleToggleSport}>{sportKey}</Button> */}
        <Button onClick={() => toggleSport('baseball_mlb')}>Baseball</Button>
        <Button onClick={() => toggleSport('icehockey_nhl')}>Hockey</Button>
        <Button onClick={() => toggleSport('basketball_nba')}>Basketball</Button>
        <Button onClick={() => toggleSport('football_nfl')}>Football</Button>
        <p>Current Sport: {sportKey}</p>
      </Flex>
      <Flex marginTop="10vh">
        <Image onClick={handleHome} boxSize='75px' borderRadius='full' position="absolute" top={2} left={2} cursor="pointer" src='https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/7JVZX7w1WO3FSm9lovCa_300x300.jpg'/>
        <Box position="absolute" top={90} left={2} cursor="pointer" onClick={handleTest}>Test</Box>
        <Box position="absolute" top={110} left={2} cursor="pointer" onClick={handleTemp}>Temp</Box>
        <Button position="absolute" top={10} right={10} onClick={handleClick}>Fetch odds data</Button>
        <Box p={12} rounded={6} background={formBackground} textAlign="right">
          <Heading mb={6}>Home</Heading>
          <table>
            {data
              // .sort((a, b) => a.sport_key.localeCompare(b.sport_key))
              .map((odd) => (
                <tbody>
                  <br />
                  {odd.home_team}
                  <hr />
                  {odd.bookmakers
                    .filter((bookmaker) => 
                    bookmaker.title === "Bet365" || 
                    bookmaker.title === "BetMGM" ||
                    bookmaker.title === "BetRivers" ||
                    bookmaker.title === "Caesars" ||
                    bookmaker.title === "DraftKings" ||
                    bookmaker.title === "PointsBet (US)" ||
                    bookmaker.title === "FanDuel"
                    )
                    .sort((b, a) => a.markets[0].outcomes[1].price - b.markets[0].outcomes[1].price)
                    .map((bookmaker) => (
                      <tr>
                        {bookmaker.markets
                          .filter((market) => market.key === "h2h")
                          .map((market) =>
                            market.outcomes
                            .filter((outcome) => outcome.name === odd.home_team)
                            .map((outcome) => (
                              <td>
                                {bookmaker.title} {outcome.price}
                              </td>
                            ))
                          )}
                      </tr>
                    ))}
                </tbody>
              ))}
          </table>
        </Box>
        <Box p={12} rounded={6} background={formBackground}>
          <Heading mb={6}>Away</Heading>
          <table>
            {data
              .sort((a, b) => a.sport_key.localeCompare(b.sport_key))
              .map((odd) => (
                <tbody>
                  <br />
                  {odd.away_team}
                  <hr />
                  {odd.bookmakers
                    .filter((bookmaker) => 
                    bookmaker.title === "Bet365" || 
                    bookmaker.title === "BetMGM" ||
                    bookmaker.title === "BetRivers" ||
                    bookmaker.title === "Caesars" ||
                    bookmaker.title === "DraftKings" ||
                    bookmaker.title === "PointsBet (US)" ||
                    bookmaker.title === "FanDuel"
                    )
                    .sort((b, a) => a.markets[0].outcomes[0].price - b.markets[0].outcomes[0].price)
                    .map((bookmaker) => (
                      <tr>
                        {bookmaker.markets
                          .filter((market) => market.key === "h2h")
                          .map((market) =>
                            market.outcomes
                            .filter((outcome) => outcome.name === odd.away_team)
                            .map((outcome) => (
                              <td>
                                {outcome.price} {bookmaker.title}
                              </td>
                            ))
                          )}
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
    </Flex>
  )
}

export default GuestPage