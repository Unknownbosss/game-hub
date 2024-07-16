import useData from "./useData"

function usePlatform() {
    return useData('/platforms/lists/parents')
}

export default usePlatform