import { Flex , Text, Input, Icon, HStack, Avatar, Box } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { Notification } from './Notification'


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
            <Logo />
            
            <SearchBox />           

            <Flex
            ml="auto"
            align="center" 
            >
                    <Notification />
                    <Profile />
            </Flex>
        </Flex>
    )
}