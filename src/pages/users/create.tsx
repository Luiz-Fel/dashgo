import { Box, Flex, Heading, HStack, Stack, Button } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
    return(
        <Box>

            <Header />

            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    </Flex>
                    <Stack spacing="8">
                    <HStack spacing="6">
                          
                        <Input name="name" label="Nome completo" />
                        <Input name="email" type="email" label="E-mail" />
                    </HStack>  

                    <HStack spacing="6">
                            
                        <Input name="password" type="password" label="Senha" />
                        <Input name="passwordConfirmation" type="password" label="Confirmação de senha" />
                    </HStack>  
                

                    </Stack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">

                        <Button
                        colorScheme="whiteAlpha"
                        >Cancelar</Button>
                        <Button
                        colorScheme="pink"
                        >Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>

        </Box>
    )
}