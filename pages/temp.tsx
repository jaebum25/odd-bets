import { Box, Button, Divider, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
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

  const oddsData = [
    {
      id: "bda33adca828c09dc3cac3a856aef176",
      sport_key: "americanfootball_nfl",
      commence_time: "2021-09-10T00:20:00Z",
      home_team: "Tampa Bay Buccaneers",
      away_team: "Dallas Cowboys",
      bookmakers: [
        {
          key: "unibet",
          title: "Unibet",
          last_update: "2021-06-10T13:33:18Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 240,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -303,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -109,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -111,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "caesars",
          title: "Caesars",
          last_update: "2021-06-10T13:33:48Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 240,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -278,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -110,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -110,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "sugarhouse",
          title: "SugarHouse",
          last_update: "2021-06-10T13:34:07Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 240,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -305,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -109,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -112,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "draftkings",
          title: "DraftKings",
          last_update: "2021-06-10T13:33:26Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 240,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -305,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -109,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -112,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "pointsbetus",
          title: "PointsBet (US)",
          last_update: "2021-06-10T13:36:20Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 230,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -291,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -110,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -110,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "betonlineag",
          title: "BetOnline.ag",
          last_update: "2021-06-10T13:37:29Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 240,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -286,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -105,
                  point: 6,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -115,
                  point: -6,
                },
              ],
            },
          ],
        },
        {
          key: "betmgm",
          title: "BetMGM",
          last_update: "2021-06-10T13:32:45Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 225,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -275,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -110,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -110,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "betrivers",
          title: "BetRivers",
          last_update: "2021-06-10T13:35:33Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 240,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -305,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -109,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -112,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "fanduel",
          title: "FanDuel",
          last_update: "2021-06-10T13:33:23Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 225,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -275,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -110,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -110,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "barstool",
          title: "Barstool Sportsbook",
          last_update: "2021-06-10T13:34:48Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 240,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -305,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -109,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -112,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "bovada",
          title: "Bovada",
          last_update: "2021-06-10T13:35:51Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 240,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -290,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -110,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -110,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "williamhill_us",
          title: "William Hill (US)",
          last_update: "2021-06-10T13:34:10Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: 240,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -280,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Dallas Cowboys",
                  price: -110,
                  point: 6.5,
                },
                {
                  name: "Tampa Bay Buccaneers",
                  price: -110,
                  point: -6.5,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "bda33adca828c09dc3cac3a856aef177",
      sport_key: "americanbasketball_nba",
      commence_time: "2021-09-10T00:20:00Z",
      home_team: "Boston Celtics",
      away_team: "Toronto Raptors",
      bookmakers: [
        {
          key: "betrivers",
          title: "BetRivers",
          last_update: "2021-06-10T13:33:18Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Boston Celtics",
                  price: 240,
                },
                {
                  name: "Toronto Raptors",
                  price: -303,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Boston Celtics",
                  price: -109,
                  point: 6.5,
                },
                {
                  name: "Toronto Raptors",
                  price: -111,
                  point: -6.5,
                },
              ],
            },
          ],
        },
        {
          key: "fanDuel",
          title: "FanDuel",
          last_update: "2021-06-10T13:33:48Z",
          markets: [
            {
              key: "h2h",
              outcomes: [
                {
                  name: "Boston Celtics",
                  price: 210,
                },
                {
                  name: "Toronto Raptors",
                  price: -278,
                },
              ],
            },
            {
              key: "spreads",
              outcomes: [
                {
                  name: "Boston Celtics",
                  price: -110,
                  point: 6.5,
                },
                {
                  name: "Toronto Raptors",
                  price: -110,
                  point: -6.5,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

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
        <Heading mb={6}>Home</Heading>
        <table>
          {oddsData
            .sort((a, b) => a.sport_key.localeCompare(b.sport_key))
            .map((data) => (
              <tbody>
                <br />
                {data.home_team}
                <hr />
                {data.bookmakers
                  .filter((bookmaker) => 
                  bookmaker.title === "Bet365" || 
                  bookmaker.title === "BetMGM" ||
                  bookmaker.title === "BetRivers" ||
                  bookmaker.title === "Caesars" ||
                  bookmaker.title === "DraftKings" ||
                  bookmaker.title === "PointsBet (US)" ||
                  bookmaker.title === "FanDuel"
                  )
                  .sort((b, a) => {
                    const aPrice = a.markets.find((m) => m.key === "h2h")?.outcomes[1]?.price ?? Infinity;
                    const bPrice = b.markets.find((m) => m.key === "h2h")?.outcomes[1]?.price ?? Infinity;
                    return aPrice - bPrice;
                  })
                  .map((bookmaker) => (
                    <tr>
                      {bookmaker.markets
                        .filter((market) => market.key === "h2h")
                        .map((market) =>
                          market.outcomes
                          .filter((outcome) => outcome.name === data.home_team)
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
          {oddsData
            .sort((a, b) => a.sport_key.localeCompare(b.sport_key))
            .map((data) => (
              <tbody>
                <br />
                {data.away_team}
                <hr />
                {data.bookmakers
                  .filter((bookmaker) => 
                  bookmaker.title === "Bet365" || 
                  bookmaker.title === "BetMGM" ||
                  bookmaker.title === "BetRivers" ||
                  bookmaker.title === "Caesars" ||
                  bookmaker.title === "DraftKings" ||
                  bookmaker.title === "PointsBet (US)" ||
                  bookmaker.title === "FanDuel"
                  )
                  .sort((b, a) => {
                    const aPrice = a.markets.find((m) => m.key === "h2h")?.outcomes[0]?.price ?? Infinity;
                    const bPrice = b.markets.find((m) => m.key === "h2h")?.outcomes[0]?.price ?? Infinity;
                    return aPrice - bPrice;
                  })
                  .map((bookmaker) => (
                    <tr>
                      {bookmaker.markets
                        .filter((market) => market.key === "h2h")
                        .map((market) =>
                          market.outcomes
                          .filter((outcome) => outcome.name === data.away_team)
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
    </Flex>
  )
}
// data.bookmakers.markets.outcomes.price
export default TempPage