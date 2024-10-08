import React from 'react'
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'
const DashboardLayout = ({title, children}) => {
    const {isOpen, onClose, onOpen } = useDisclosure();
    // isOpen is an boolean whether component open or not
    // onOpen to open and onClose to close 
    return (
    <Box>
        <Flex>
            <Box
                display={{
                    base: "none",
                    lg: "flex"
                }}
            >
                <Sidenav /> 
            </Box>

            {/* side drawer for small screen it  */}
            <SideDrawer isOpen={isOpen} onClose={onClose}/>

            
            <Box flexGrow={1}>
                <TopNav title={title} onOpen={onOpen}/>
                <Container overflowX="hidden" overflowY="auto" h="calc(100vh-88px)" mt="6" maxWidth="1120px">{children}</Container>
            </Box>
        </Flex>
    </Box>
  )
}

export default DashboardLayout
