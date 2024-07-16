import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar({onSearch}) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="10px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
