import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";

function GameCard({ game }) {
  console.log(game);
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game?.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game?.name}</Heading>
        <PlatFormIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
