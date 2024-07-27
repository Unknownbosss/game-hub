import { useQuery } from "@tanstack/react-query"
import platforms from "../data/platform"
import APIClient from '../services/api-client'

const apiClient = new APIClient('/platforms/lists/parents');

function usePlatforms() {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24hrs
        initialData: platforms
    })
}

export default usePlatforms