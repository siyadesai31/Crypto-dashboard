import { Box, Stack, HStack, Icon, Text, Heading} from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx"
import { GrTransaction } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Link } from "react-router-dom";
const Sidenav = () => {

  const navLinks = [
    {
        icon: RxDashboard,
        text: "Dashboard",
        link: "/"
    },
    {
        icon: GrTransaction,
        text: "Transactions",
        link: "/transaction"
    }
  ]
    
  //stack has display flex and flex direction column
  //mstack has display flex and align item center
  //text is like p tag in chakra ui   
  return (
    <Stack  
            bg="white"
            justifyContent="space-between" 
            boxShadow={{
                base: "none",
                lg: "lg"
            }} 
            width={{
                base: "full",
                lg: "256px"
            }} 
            height="100vh"
            >
        <Box>
            <Heading as="h1" fontSize="20px" pt="3.5rem" textAlign="center" color="p.purple">Cryto-Dashboard</Heading>
            <Box mt="20px" mx="3">
            {navLinks.map((nav) => (
                <Link to={nav.link} key={nav.text }>
                    <HStack borderRadius="10px" py="3" px="4" _hover={ {bg: "#F3F3F7", color:"black"}} color="gray">
                        <Icon as={nav.icon} />
                        <Text fontSize="14px" fontWeight="medium">{nav.text}</Text> 
                    </HStack>
                </Link>
            ))}
            </Box>
        </Box>

        <Box mt="20px" mx="3" mb="6">
            <Link to="/support">  
                <HStack borderRadius="10px" py="3" px="4" _hover={ {bg: "#F3F3F7", color:"black"}} color="gray">
                        <Icon  as={MdSupportAgent}/>
                        <Text fontSize="14px" fontWeight="medium">Support</Text> 
                </HStack>
            </Link>
        </Box>
    </Stack>
  );
}

export default Sidenav
