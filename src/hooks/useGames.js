import useData from "./useData";

function useGames() {
    return useData('/games')
}

export default useGames