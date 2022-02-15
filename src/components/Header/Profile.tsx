import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

export function Profile() {
  return (
    <>
      <Box mr="4" textAlign="right">
        <Text>Luiz Felipe</Text>
        <Text color="gray.300" fontSize="small">
          luiz.schell.f@email.com
        </Text>
      </Box>
      <Avatar
        src="https://github.com/Luiz-fel.png"
        size="md"
        name="Luiz Felipe"
      />
    </>
  );
}
