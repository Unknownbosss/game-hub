import { useEffect, useState } from 'react'
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

function useData(endpoint, requestConfig, deps) {

    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController();
        apiClient.get(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => setData(res.data.results)).catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            }).finally(() => setLoading(false));

        return () => controller.abort() 
    }, deps ? [...deps] : []);

    return { data, error, isLoading }
}

export default useData 