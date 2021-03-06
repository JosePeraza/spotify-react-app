import React from 'react';
import "../css/Body.css";
import "../css/Themes.css";
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDatalayerValue } from '../DataLayer';
import SongRowItem from './SongRow';

function Body({ spotify, handleDrawerToggle }) {
    const [{ new_releases, categories, featured_playlists, lightmode }] = useDatalayerValue();

    return (
        <div className={`body ${lightmode === false ? `dark_body`: `bright_body`}`}>
            <Header spotify={spotify} toggleButton={handleDrawerToggle}/>

            <div className="body_info">
                <img src={new_releases?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{new_releases?.name}</h2>
                    <p> <strong>{new_releases?.owner.display_name}</strong> •  
                        {new Intl.NumberFormat().format(new_releases?.followers.total)} me gusta •
                        {new_releases?.tracks.total} canciones
                    </p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon  className="body_shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                <div className="songRow_container">
                    <h2><strong>New Releases</strong><span className={`outer_line ${lightmode === false ? `dark_outer_line`: `bright_outer_line`}`}></span></h2>
                    <div className="body_songRow">
                        {new_releases?.tracks.items.map(item => (
                            <SongRowItem key={item.id} 
                            image={item.track.album.images[0].url} 
                            title={item.track.name} 
                            artist={item.track.artists.map((artist) => artist.name).join(", ")} 
                            album={item.track.album.name}  />
                        ))}
                    </div>
                </div>
                <div className="songRow_container">
                    <h2><strong>Featured Playlists</strong><span className={`outer_line ${lightmode === false ? `dark_outer_line`: `bright_outer_line`}`}></span></h2>
                    <div className="body_songRow">
                        {featured_playlists?.playlists.items.map(item => (
                            <SongRowItem key={item.id}
                            image={item.images[0].url} 
                            title={item.name} />
                        ))}
                    </div>
                </div>
                <div className="songRow_container">
                    <h2><strong>Categories</strong><span className={`outer_line ${lightmode === false ? `dark_outer_line`: `bright_outer_line`}`}></span></h2>
                    <div className="body_songRow">
                        {categories?.categories.items.map(item => (
                            <SongRowItem key={item.id}
                            image={item.icons[0].url} 
                            title={item.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
