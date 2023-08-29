import { useState, useEffect } from "react";

export const usePost = (url, requestData) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
            .then((response) => response.json())
            .then((data) => setData(data))
            .then((data) => console.log(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}
