import { Icon, Link as ChackraLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  children: string;
  icon: ElementType;
  href: string;
}

export function NavLink({children, icon, href, ...rest} : NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChackraLink display="flex" alingn="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChackraLink>
    </ActiveLink>
  );
}
