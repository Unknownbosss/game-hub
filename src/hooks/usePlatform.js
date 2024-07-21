import { useQuery } from "@tanstack/react-query"
import platform from "../data/platform"
import apiClient from '../services/api-client'


function usePlatform() {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get('/platforms/lists/parents').then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24hrs
        initialData: { count: platform.length, results: platform }
    })
}

export default usePlatform