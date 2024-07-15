import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";

function GameCard({ game }) {
  console.log(game);
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game?.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game?.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
