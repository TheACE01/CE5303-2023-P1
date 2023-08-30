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
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(responseData => setData(responseData))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}
