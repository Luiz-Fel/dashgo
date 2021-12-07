import { Flex , Text, Input, Icon, HStack, Avatar, Box } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri'


export function Header() {
    return (
        <Flex 
        as="header" 
        w="100%"
        align="center"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        >
            <Text fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"

            >dashgo
            <Text as="span" color="pink.500" ml="1">.</Text>
            </Text>
            
            <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            color="gray.200"
            alignSelf="center"
            maxWidth={400}
            position ="relative"
            borderRadius="full"
            bg="gray.800"
            
            >
                <Input
                color="gray.50"
                variant="unstyled"
                placeholder="Buscar na plataforma"
                _placeholder={{ color : 'gray.400'}}
                px="4"
                mr="4"
                />

                <Icon fontSize="20" as={RiSearchLine} />
            </Flex>

            <Flex
            ml="auto"
            align="center" 
            >
                    <HStack
                    spacing="8"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                    >
                        <Icon as={RiNotificationLine} fontSize="20"></Icon>
                        <Icon as={RiUserLine} fontSize="20"></Icon>
                    </HStack>
                    <Box mr="4" textAlign="right">
                    <Text>Luiz Felipe</Text>
                    <Text color="gray.300" fontSize="small" >luiz.schell.f@email.com</Text>

                    </Box>
                    <Avatar 
                    src="https://github.com/Luiz-fel.png"
                    size="md" 
                    name="Luiz Felipe" 
                    />
            </Flex>
        </Flex>
    )
}