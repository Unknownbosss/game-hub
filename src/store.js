import { create } from "zustand";

const useGameQueryStore = create(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreID: (genreID) => set(store => ({ gameQuery: { ...store.gameQuery, genreID } })),
    setPlatformID: (platformID) => set(store => ({ gameQuery: { ...store.gameQuery, platformID } })),
    setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } }))

}))

export default useGameQueryStore;