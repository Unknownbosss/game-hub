import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function GameGrid() {
  const {
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="md"
        />
      }
    >
      <SimpleGrid
        padding={10}
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
      >
        {isFetching &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page?.results.map((game) => (
              <GameCardContainer key={game?.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;
