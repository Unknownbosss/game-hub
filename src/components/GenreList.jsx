import React from "react";
import useGenre from "../hooks/useGenre";
import { HStack, Image, Link, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data } = useGenre("/genres");
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link fontSize="lg">{genre.name}</Link>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
