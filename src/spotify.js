export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = "https://spotify-react-app-sunwise.netlify.app/";
const clientId = "d3a1dbdcd3664b8fb4101206df01c0e0";

//Utilize el metodo de autenticacion "Implicit Grant Flow" debido a que al pasar la clave de usuario privada en el request cors me bloqueaba la peticion

// Permisos que le das al usuario en tu aplicacion
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

//Obtenemos el token desde la URL
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;