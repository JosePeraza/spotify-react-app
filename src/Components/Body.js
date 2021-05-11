import React from 'react';
import "../css/Body.css";
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDatalayerValue } from '../DataLayer';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ new_releases }] = useDatalayerValue();

    return (
        <div className="body">
            <Header spotify={spotify}/>

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
                {new_releases?.tracks.items.map(item => (
                    <SongRow key={item.id} track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
