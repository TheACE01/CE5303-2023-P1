const BASE_URL = "http://10.42.0.48:5000/api/";

export const apiTurnOnLight = async (light) => {
    //const url = BASE_URL + "/light/turn-on";
    const url = 'https://jsonplaceholder.typicode.com/posts';
    //const postData = { lightNumber: light };
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: light,
                body: 'bar',
                userId: 1,
            })
        });
        if (!resp.ok) throw new Error('Ha surgido un error');
        const respJson = await resp.json();
        return respJson;
    } catch (error) {
        console.log(error);
        return null
    }
}

export const apiTurnOffLight = async (light) => {
    //const url = BASE_URL + "/light/turn-off";
    const url = 'https://jsonplaceholder.typicode.com/posts';
    //const postData = { lightNumber: light };    
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: light,
                body: 'bar',
                userId: 1,
            })
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
    //const url = BASE_URL + "/lights/turn-on";
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            })
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
    //const url = BASE_URL + "/lights/turn-off";
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const resp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            })
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
    //const url = BASE_URL + "/house/status";
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
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
    //const url = BASE_URL + "/house/photo";
    const url = `https://picsum.photos/300`;
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