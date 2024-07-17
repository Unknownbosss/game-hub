import genres from '../data/genres'
function useGenre() {
    return { data: genres, isLoading: false, error: null }
}

export default useGenre 