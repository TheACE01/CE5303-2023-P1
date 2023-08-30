import { useFetch } from "../hooks/useFetch";
import { usePost } from "../hooks/usePost";

const BASE_URL = "/api/";

export const ApiTurnOnLight = async (light) => {
    const url = BASE_URL + "/light/turn-on";
    const postData = { lightNumber: light };
    const { data, loading, error } = usePost(url, postData);
    return { data, loading, error }
}

export const ApiTurnOffLight = async (light) => {
    const url = BASE_URL + "/light/turn-off";
    const postData = { lightNumber: light };
    const { data, loading, error } = usePost(url, postData);
    return { data, loading, error }
}


export const ApiTurnOnAllLights = async () => {
    const url = BASE_URL + "/lights/turn-on";
    const postData = {};
    const { data, loading, error } = usePost(url, postData);
    return { data, loading, error }
}

export const ApiTurnOffAllLights = async () => {
    const url = BASE_URL + "/lights/turn-off";
    const postData = {};
    const { data, loading, error } = usePost(url, postData);
    return { data, loading, error }
}


export const ApiGetHouseStatus = async () => {
    const url = BASE_URL + "/house/status";
    const { data, loading, error } = useFetch(url);
    return { data, loading, error }
}


export const apiTakePhoto = async () => {
    const url = BASE_URL + "/house/photo";

    try {
        const resp = await fetch(url, {
            method: "GET",
            redirect: "follow",
            cache: 'no-cache',
        })

        if (!resp.ok) throw new Error('No se pudo traer la imagen');

        const blob = await resp.blob();

        const src = URL.createObjectURL(blob);

        return src;

    } catch (error) {
        console.log(error);
        return null
    }

}