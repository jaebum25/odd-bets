import { Box, Flex, Heading } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const GuestPage = () => {
  const [data, setData] = useState([])
  const apiKey = '743f398782ef7a29bc5ce48df05749dd'

  useEffect(() => {
    fetch(`https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&apiKey=${apiKey}`)
    // .then(response => {
    //   const requestsUsed = response.headers.get('x-requests-used');
    //   const requestsRemaining = response.headers.get('x-requests-remaining');
    //   console.log(`Requests used: ${requestsUsed}`);
    //   console.log(`Requests remaining: ${requestsRemaining}`)})
    .then(response => response.json())
    .then(data => setData(data))
  }, []);

  return (
    <Flex height="200vh" alignItems="center" justifyContent="center">
      <Box p={12} rounded={6} bg="gray.100">
        <Heading mb={6}>Welcome, Guest!</Heading>
        <p>H2H</p>
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
                  .map((market) => (
                    market.outcomes
                    .map((outcome) => (
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
      <Box></Box>
    </Flex>
  )
}

export default GuestPage