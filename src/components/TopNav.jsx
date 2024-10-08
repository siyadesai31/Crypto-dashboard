import { Container, Flex, Heading, Menu, MenuButton, MenuList, MenuItem,Button, HStack, Box, Icon} from '@chakra-ui/react'
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import React from 'react'

const TopNav = ({title ,onOpen}) => {
  return (
    <Box px="4">
        <HStack  mx="auto" maxWidth="1120px" h="16" justify="space-between">
            {/* here onOpen is for the bars is sidebar not open then show the bars */}
            <Icon as={FaBars} onClick={onOpen} display={{
              base: "block", lg:"none"
            }}/>
            <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
            
            <Menu>
            <MenuButton as={Button} colorScheme='gray'>
                <Icon as={FaRegCircleUser} fontSize="28px"/>
            </MenuButton>
            <MenuList>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Support</MenuItem>
            </MenuList>
            </Menu>
        </HStack>
    </Box>
  )
}

export default TopNav
