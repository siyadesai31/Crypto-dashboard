import { Stack, HStack, Tag, Text, Icon, Button, Flex, Image, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import { CustomCard } from '../../../chakra/CustomCard'; // Adjust the path as needed
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";
const PriceSection = () => {
    const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

    return (
        <CustomCard>
        <Flex justify="space-between" align="start">
            <Stack>
            <HStack color="black.80">
                <Text fontSize="sm">Wallet Balances</Text>
            </HStack>
            <HStack
                spacing={2}
                align={{
                base: "flex-start",
                sm: "center",
                }}
                flexDir={{
                base: "column",
                sm: "row",
                }}
            >
                <HStack>
                <Text textStyle="h2" fontWeight="medium">
                    22.39401000
                </Text>{" "}
                <HStack fontWeight="medium" color="green.500">
                    <Icon as={FiArrowUpRight} />
                    <Text fontSize="sm" fontWeight="medium">
                    22%
                    </Text>
                </HStack>{" "}
                </HStack>
            </HStack>
            </Stack>
            <HStack>
            <Button leftIcon={<Icon as={CiCirclePlus} />}>Buy</Button>
            <Button leftIcon={<Icon as={CiCircleMinus} />}>Sell</Button>
            </HStack>
        </Flex>
        

        <Tabs variant='soft-rounded'>
            <Flex justify="end">
                <TabList bg="balck.5" p="3px">
                    {["1H","1D","1W","1M"].map((tab) => 
                        <Tab _selected={{ bg: "white" }} 
                             key={tab}  
                             fontSize="sm" 
                             p="6px" 
                             borderRadius="4">
                                {tab}
                        </Tab>
                    )}
                </TabList>
            </Flex>
            <TabPanels>
                <TabPanel>
                <Image w="100%" mt="3rem" src="../../../../public/Graph.png" />
                    <HStack justify="space-between">
                        {timestamps.map((timestamps) => (
                            <Text key={timestamps} fontSize="sm" color="black.80">{timestamps}</Text>
                        ))}
                    </HStack>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
                <TabPanel>
                <p>three!</p>
                </TabPanel>
                <TabPanel>
                <p>four!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>

        </CustomCard>
    );
};

export default PriceSection;
