import { Heading } from "@chakra-ui/react";
import React from "react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

function GameHeading({ gameQuery }) {
  const genre = useGenre(gameQuery.genreID);

  const platform = usePlatform(gameQuery?.platformID);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
