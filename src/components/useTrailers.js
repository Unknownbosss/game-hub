import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


const useTrailers = (gameID) => {
    const apiClient = new APIClient(`/games/${gameID}/movies`)
    return useQuery({
        queryKey: ['trailers', gameID],
        queryFn: () => apiClient.getAll()

    })
}

export default useTrailers;