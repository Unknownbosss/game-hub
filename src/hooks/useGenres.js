import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import APIClient from '../services/api-client'

const apiClient = new APIClient('/genres');

function useGenres() {
    return useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24hrs
        initialData: genres
    })
}

export default useGenres 