import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebAPI from 'spotify-web-api-js';
import Player from './Components/Player';
import { useDatalayerValue } from './DataLayer';
// import makeRequest from './makeRequest';


const spotify = new SpotifyWebAPI();


function App() {
  const [{ token }, dispatch] = useDatalayerValue();

  // useEffect(() => {
  //   console.log(makeRequest());
  // }, []);

  // Entregamos el token y renderizamos la pagina
  useEffect(() => {
    const hash = getTokenFromUrl();
    //ocultamos el token de nuestra URL
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('6YBNnMxHFtBMakBI3H2Jct').then(response => {
        dispatch({
          type: 'SET_NEW_RELEASES',
          new_releases: response,
        });
      });
      
    }
    console.log(spotify.getPlaylist('6YBNnMxHFtBMakBI3H2Jct'));
  }, [dispatch]);

  return (
    <div className="app">
    {
      token ? (
        <Player spotify={spotify}/>
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
