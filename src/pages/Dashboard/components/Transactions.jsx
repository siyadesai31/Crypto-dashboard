import { CustomCard } from "../../../chakra/CustomCard"
import { HStack, Icon, Stack, Text, Flex, Grid, Divider, Button } from "@chakra-ui/react"
import { Fragment } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text fontSize="sm" mb={6}>Recent Transactions</Text>
      <Stack>
        {transactions.map((transactions,i) => (
         <Fragment key={transactions.id}>
            {i !== 0 && <Divider/> }
            <Flex gap={4}>
              <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
                <Icon as={transactions.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                    <Stack spacing={0}>
                      <Text textStyle="h6" color="black.80">{transactions.text}</Text>
                      <Text fontSize="sm" color="black.80">{transactions.timestamp}</Text>
                    </Stack>
                    <Text textStyle="h6">{transactions.amount}</Text>
                </Flex>
            </Flex>
         </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt={6}>View All</Button>
    </CustomCard>
  )
}

export default Transactions
