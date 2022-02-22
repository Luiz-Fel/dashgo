import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Checkbox, Tbody, Text, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination/Index'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {

    const isWideversion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return(
        <Box>

            <Header />

            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create" passHref>
                            <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="pink" 
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}>Criar novo</Button>
                        </Link>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorscheme="pink"></Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                {isWideversion && (<Th>Data de cadastro</Th>)}
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold"> John Doe</Text>
                                        <Text fontWeight="sm" color="gray.300"> john.schell.f@email.com</Text>
                                    </Box>
                                </Td>
                                {isWideversion && <Td>07 de Dezembro, 2021</Td>}
                            {isWideversion && (<Td>
                                <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="purple" 
                                leftIcon={<Icon as={RiPencilLine} fontSize="20" />}>Editar
                                </Button>
                            </Td>)}
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold"> Paul Todd</Text>
                                        <Text fontWeight="sm" color="gray.300"> paul.schell.f@email.com</Text>
                                    </Box>
                                </Td>
                                {isWideversion && <Td>15 de Dezembro, 2021</Td>}
                            {isWideversion && (<Td>
                                <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="purple" 
                                leftIcon={<Icon as={RiPencilLine} fontSize="20" />}>Editar
                                </Button>
                            </Td>)}
                            </Tr><Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold"> Maria  Clara</Text> 
                                        <Text fontWeight="sm" color="gray.300"> maria.schell.f@email.com</Text>
                                    </Box>
                                </Td>
                                {isWideversion && <Td>06 de Dezembro, 2021</Td>}
                            {isWideversion && (<Td>
                                <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="purple" 
                                leftIcon={<Icon as={RiPencilLine} fontSize="20" />}>Editar
                                </Button>
                            </Td>)}
                            </Tr>
                            <Tr>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>

        </Box>
    )
}