import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Checkbox, Tbody, Text, useBreakpointValue, Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination/Index'
import { Sidebar } from '../../components/Sidebar'
import { useUsers } from '../../services/hooks/useUsers'



export default function UserList() {

    const [page, setPage] = useState(1)
    const {data, isLoading, isFetching, error} = useUsers(page)
    


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
                        <Heading size="lg" fontWeight="normal">
                            Usuários

                            {!isLoading && isFetching && <Spinner size="sm"  color="gray.500" ml="4"/>}
                            </Heading>
                        <Link href="/users/create" passHref>
                            <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="pink" 
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}>Criar novo</Button>
                        </Link>
                    </Flex>
                    {
                        isLoading ? 
                        (<Flex justify="center">
                            <Spinner />
                        </Flex>
                        ) : error ? (
                        <Flex justify="center">
                            Falha ao obter dados.
                        </Flex>
                        ) : (   
                         <>
                            <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                        <Checkbox colorscheme="pink" ></Checkbox>
                                    </Th>
                                    <Th>Usuário</Th>
                                    {isWideversion && (<Th>Data de cadastro</Th>)}
                                    <Th w="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.users.map((user) => {
                                    return (
                                        <Tr key={user.id}>
                                        <Td px={["4", "4", "6"]}>
                                            <Checkbox colorScheme="pink"></Checkbox>
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold">{user.name}</Text>
                                                <Text fontWeight="sm" color="gray.300"> {user.email}</Text>
                                            </Box>
                                        </Td>
                                        {isWideversion && <Td>{user.createdAt}</Td>}
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
    
                                    )
                                })}    
                            
                            </Tbody>
                            </Table>
                            <Pagination 
                                totalCountOfRegisters={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>)
                    }
                </Box>
            </Flex>

        </Box>
    )
}