import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NAvBAr</Text>
    </HStack>
  );
}

export default NavBar;
