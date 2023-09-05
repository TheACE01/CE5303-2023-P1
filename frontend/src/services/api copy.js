const BASE_URL = "http://10.42.0.48:5000/api/";

export const apiTurnOnLight = async (room) => {
    const url = BASE_URL + "/light/turn-on";
    const postData = { roomName: room };
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        if (!resp.ok) throw new Error('Ha surgido un error');
        const respJson = await resp.json();
        return respJson;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const apiTurnOffLight = async (room) => {
    const url = BASE_URL + "/light/turn-off";
    const postData = { roomName: room };
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        if (!resp.ok) throw new Error('Ha surgido un error');
        const respJson = await resp.json();
        return respJson;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const apiTurnOnAllLights = async () => {
    const url = BASE_URL + "/lights/turn-on";
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        if (!resp.ok) throw new Error('Ha surgido un error');
        const respJson = await resp.json();
        return respJson;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const apiTurnOffAllLights = async () => {
    const url = BASE_URL + "/lights/turn-off";
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        if (!resp.ok) throw new Error('Ha surgido un error');
        const respJson = await resp.json();
        return respJson;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const apiGetHouseStatus = async () => {
    const url = BASE_URL + "/house/status";
    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('Ha surgido un error');
        const respJson = await resp.json();
        console.log(respJson)
        return respJson;
    } catch (error) {
        console.log(error);
        return null
    }
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