import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '99b7b92ff7d04fe6b99574a8a0b8c35c'
    }
})