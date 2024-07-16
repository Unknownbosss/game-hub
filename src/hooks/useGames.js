import useData from "./useData";

function useGames(selectedGenre) {
    return useData('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])
}

export default useGames