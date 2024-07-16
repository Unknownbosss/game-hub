import React from "react";
import useGenre from "../hooks/useGenre";
import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data, isLoading } = useGenre("/genres");

  if (error) return null;
  if (isLoading) return <Spinner />;
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
