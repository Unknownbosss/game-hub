import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


const apiClient = new APIClient('/games',);

function useGames(gameQuery) {
    return useQuery({
        queryKey: ['genres', gameQuery],
        queryFn: () => apiClient.getAll({
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
        })
    })
}

export default useGames;
