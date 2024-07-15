import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

function useGames() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController();
        apiClient.get("/games", { signal: controller.signal })
            .then((res) => setGames(res.data.results)).catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            }).finally(() => setLoading(false));

        return () => controller.abort()
    }, []);

    return { games, error, isLoading }
}

export default useGames