import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_API_KEY,
    }
})

class APIClient {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getAll = (config) => {
        const params = { ...axiosInstance.params, ...config }
        return axiosInstance.get(this.endpoint, { params })
            .then(res => res.data)
    }
}

export default APIClient;