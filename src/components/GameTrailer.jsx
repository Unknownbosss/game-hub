import useTrailers from "./useTrailers";

function GameTrailer({ gameID }) {
  const { data: game, error, isLoading } = useTrailers(gameID);

  if (isLoading) return null;

  if (error) throw error;

  const first = game?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
}

export default GameTrailer;
