import { Flex, Tag, Icon, Input, Stack, Text, Card, HStack, FormControl, FormLabel, Textarea, Checkbox, Button } from "@chakra-ui/react";

const SupportCard = ({leftComponent, title, message, icon}) => {
  return (
    <Flex gap={6}
        flexDir={{
            base: "column",
            xl: "row",
            }}
    >
        <Stack maxW="380px">
            <Icon as={icon} color="p.purple" boxSize={6}/>
            <Text textStyle="h1" fontWeight="medium">{title}</Text>
            <Text textStyle="h6" color="black.60">{message}</Text>
        </Stack>
        {leftComponent}
    </Flex>
  )
}

export default SupportCard
