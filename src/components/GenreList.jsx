import React from "react";
import useGenre from "../hooks/useGenre";

function GenreList() {
  const { data } = useGenre('/genres');
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
