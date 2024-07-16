import { Box } from "@chakra-ui/react";
import React from "react";

function GameCardContainer({ children }) {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
