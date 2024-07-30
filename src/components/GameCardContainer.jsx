import { Box } from "@chakra-ui/react";
import React from "react";

function GameCardContainer({ children }) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .25s ease-in",
      }}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
