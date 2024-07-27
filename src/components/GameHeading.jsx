import { Heading } from "@chakra-ui/react";
import React from "react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

function GameHeading({ gameQuery }) {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreID);
  const platform = platforms?.results.find((p) => p.id === gameQuery.PlatformID);
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
