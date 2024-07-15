import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

function GameGrid() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get("/games")
    .then((res) => setGames(res.data.results)).catch(err => setError(err.message));
  });
  return <ul>
    {games.map(game => <li key={game.id}>{game.name}</li>)}
  </ul>
}

export default GameGrid;
