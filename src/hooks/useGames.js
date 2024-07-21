import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

function useGames(gameQuery) {
    return useQuery({
        queryKey: ['genres', gameQuery],
        queryFn: () => apiClient.get('/games', {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            }
        }).then(res => res.data),
    })
}

export default useGames;
