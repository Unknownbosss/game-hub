import useData from './useData';

function useGenre() {
    return useData('/genres')
}

export default useGenre 