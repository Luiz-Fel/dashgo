import { Flex , Text, Input, Icon, HStack, Avatar, Box, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine, RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { Notification } from './Notification'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'


export function Header() {
    const {onOpen} = useSidebarDrawer()

    const isWideversion = useBreakpointValue({
        base: false,
        lg: true,
    })

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
            {!isWideversion && (
                <IconButton
                aria-label="Open navigation"
                icon={<Icon as={RiMenuLine} />}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
                mr="2"
                pt="1.5"
                >

                </IconButton>
            )}
                       
            <Logo />

            <Flex
            ml="auto"
            align="center" 
            >
                    <Notification />
                    <Profile showProfileData={isWideversion} />
            </Flex>
        </Flex>
    )
}