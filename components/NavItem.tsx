import { Avatar, Divider, Flex, Heading, Icon, IconButton, Link, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'
import NavHoverBox from './NavHoverBox'

export default function NavItem({ navSize, icon, title, active, description }) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
      >
        <Menu placement="right">
          <Link
            backgroundColor={active && "#AEC8CA"}
            p={3}
            borderRadius={8}
            _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA'}}
            w={navSize == "large" && "100%"}
          >
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"} />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"} >{title}</Text>
            </Flex>
          </MenuButton>
          </Link>
          <MenuList
            py={0}
            border="none"
            w={200}
            h={200}
            ml={5}
          >
            <NavHoverBox title={title} icon={icon} description={description} navSize={undefined} active={undefined} />
          </MenuList>
        </Menu>  
      </Flex>
  )
}
