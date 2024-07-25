import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import APIClient from "../services/api-client";


const apiClient = new APIClient('/games',);

function useGames(gameQuery) {
    return useInfiniteQuery({

        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
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
