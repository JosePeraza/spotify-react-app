import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebAPI from 'spotify-web-api-js';
import Player from './Components/Player';
import { useDatalayerValue } from './DataLayer';



const spotify = new SpotifyWebAPI();


function App() {
  const [{ token }, dispatch] = useDatalayerValue();

 
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

      spotify.getPlaylist('6YBNnMxHFtBMakBI3H2Jct').then((new_releases) => {
        dispatch({
          type: 'SET_NEW_RELEASES',
          new_releases: new_releases,
        });
      });

      spotify.getFeaturedPlaylists().then((featured_playlists) => {
        dispatch({
          type: 'SET_FEATURED_PLAYLISTS',
          featured_playlists: featured_playlists,
        });
      });
      
      spotify.getCategories().then((categories) => {
        dispatch({
          type: 'SET_CATEGORIES',
          categories: categories,
        });
      });
      
    }
    
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
