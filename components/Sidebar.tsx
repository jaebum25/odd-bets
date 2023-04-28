import { Avatar, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { IoPawOutline, IoSunny, IoMoon } from 'react-icons/io5'
import { FiBriefcase, FiCalendar, FiDollarSign, FiMenu, FiHome, FiSettings, FiUser, } from 'react-icons/fi'
import { MdSportsBaseball, MdSportsBasketball, MdSportsFootball, MdSportsHockey, } from "react-icons/md"
import { useState } from 'react'
import NavItem from './NavItem'

export default function Sidebar({ }) {
  const [navSize, changeNavSize] = useState("large")
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="12.5vh"
      boxShadow="0 5px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      >
        <Flex
          p="5%"
          flexDir="column"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          as="nav"
        >
          <IconButton
            background="none"
            mt={5}
            _hover={{ background: 'none' }}
            icon={<FiMenu />}
            onClick={() => {
              if (navSize == "small")
                changeNavSize("large")
              else
                changeNavSize("small")
            }} aria-label={''}/>
          <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="" active={undefined} />
          <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active={true} description={undefined}/>
          <NavItem navSize={navSize} icon={MdSportsBaseball} title="Baseball" active={undefined} description={undefined}/>
          <NavItem navSize={navSize} icon={MdSportsBasketball} title="Basketball" active={undefined} description={undefined}/>
          <NavItem navSize={navSize} icon={MdSportsFootball} title="Football" active={undefined} description={undefined}/>
          <NavItem navSize={navSize} icon={MdSportsHockey} title="Hockey" active={undefined} description={undefined}/>
          <NavItem navSize={navSize} icon={FiSettings} title="Settings" active={undefined} description={undefined}/>
        </Flex>  
        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          mb={4}
        >
          <Divider display={navSize == "small" ? "none" : "flex"}/>
          <Flex mt={4} align="center">
            <Avatar size="sm" src="https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/7JVZX7w1WO3FSm9lovCa_300x300.jpg" />
            <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
              <Heading as="h3" size="sm">Kazuha</Heading>
              <Text color="gray">Admin</Text>
            </Flex>  
          </Flex>  
        </Flex>  
      </Flex>
  )
}
