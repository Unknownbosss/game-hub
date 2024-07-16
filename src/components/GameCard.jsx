import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

function GameCard({ game }) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} height='235px'/>
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
