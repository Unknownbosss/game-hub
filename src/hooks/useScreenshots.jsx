import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useScreenshots = (gameID) => {
  const apiClient = new APIClient(`/games/${gameID}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameID],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
