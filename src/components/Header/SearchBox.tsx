import { Flex, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

    const [search, setSearch] = useState('')


    return(
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
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />

            <Icon fontSize="20" as={RiSearchLine} />
        </Flex>
    )
}