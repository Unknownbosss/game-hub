import useData from "./useData"
import platform from "../data/platform"

function usePlatform() {
    return { data: platform, error: null }
}

export default usePlatform