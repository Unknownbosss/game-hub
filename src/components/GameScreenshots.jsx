import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

function GameScreenshots({ gameID }) {
  const { data, isLoading, error } = useScreenshots(gameID);

  if (isLoading) return <Spinner />;

  if (error) throw error;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
