import { HStack, Switch, Text, useColorMode, Button } from "@chakra-ui/react";
import { CiDark, CiLight } from "react-icons/ci";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      {/* <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text> */}

      <Button color="whitesmoke" onClick={toggleColorMode}>
        {colorMode === "dark" ? <CiLight /> : <CiDark color="gray" />}
      </Button>
    </HStack>
  );
}

export default ColorModeSwitch;
