import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Card >
      <Image src={getCroppedImageUrl(game.background_image)} height="235px" />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatFormIconList
            platforms={game?.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game?.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
