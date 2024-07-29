import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useGameQueryStore from "../store";


const apiClient = new APIClient('/games',);

function useGames() {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                genres: gameQuery.genreID,
                parent_platforms: gameQuery.platformID,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        staleTime: 24 * 60 * 60 * 1000,
    })
}

export default useGames;
