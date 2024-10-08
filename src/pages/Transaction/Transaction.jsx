import { Input, Flex, Stack, InputGroup, InputLeftElement, Button,Card, Icon, Tag, Tab, Tabs, TabPanel, TabPanels, TabList, HStack } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import { IoMdDownload } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import TransactionTable from "./components/TransactionTable";
const Transaction = () => {

  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ]
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt={6} mb={3}>
        <Button leftIcon={<Icon as={IoMdDownload}/> }>Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <HStack>
            <TabList pt={4} display="flex" w="full" justifyContent="space-between">
              <HStack>
                {tabs.map((tab) => (
                  <Tab key={tab.name} gap={2} display="flex" pb={4}> 
                    {tab.name}{" "}
                    <Tag colorScheme="gray">{tab.count}</Tag>
                  </Tab>
                ))}
              </HStack>

              <InputGroup maxW="200px" pr={6}>
                <InputLeftElement pointerEvents='none'>
                  <Icon as={CiSearch} />
                </InputLeftElement>
                <Input type='tel' placeholder='Search by ID or destination' />
              </InputGroup>
            </TabList>

          </HStack>

          <TabPanels>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default Transaction
