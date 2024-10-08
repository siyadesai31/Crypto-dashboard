import { Flex, Tag, Icon, Input, Stack, Text, Card, HStack, FormControl, FormLabel, Textarea, Checkbox, Button } from "@chakra-ui/react";


const ContactCard = () => {
  return (
    <Card p={4} borderRadius={4} flexGrow={1}>
            <Stack>
                <Text fontStyle="h6" fontWeight="medium">You will receive response within 24 hours of time of submit.</Text>
                <HStack
                    flexDir={{
                    base: "column",
                    md: "row",
                    }}
                >
                    <FormControl>
                        <FormLabel fontWeight="bold">Name</FormLabel>
                        <Input type='text' placeholder="James" />
                    </FormControl>
                    <FormControl>
                        <FormLabel fontWeight="bold">Surname</FormLabel>
                        <Input type='text' placeholder="Arthur" />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel fontWeight="bold">Email</FormLabel>
                    <Input type='email' placeholder="name@mail.com" />
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight="bold">Message</FormLabel>
                    <Textarea placeholder="Your message"></Textarea>
                </FormControl>
                <Checkbox>
                    <Text>I agree with <Tag colorScheme="gray" color="p.purple">Terms & Conditions</Tag></Text>
                </Checkbox>
                <Stack>
                    <Button fontSize="sm">Send a Mesasge</Button>
                    <Button fontSize="sm" colorScheme="gray">Book a Meeting</Button>
                </Stack>
            </Stack>
        </Card>
  )
}

export default ContactCard
