import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})

class APIClient {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getAll = (config) => {
        return axiosInstance.get(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIClient;