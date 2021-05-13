import React from 'react';
import "../css/Sidebar.css";
import "../css/Themes.css";
import SidebarItem from './SidebarItem';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDatalayerValue } from '../DataLayer';

function Sidebar() {
    const [{playlists, lightmode}] = useDatalayerValue();

    return (
        <div className={`sidebar ${lightmode === false ? `dark_sidebar`: `bright_sidebar`}`}>
            <img className="sidebar_logo" src="https://logos-marcas.com/wp-content/uploads/2020/09/Spotify-Logo.png" alt="spotify logo" />
            <SidebarItem Icon={HomeIcon} title="Home"/>
            <SidebarItem Icon={SearchIcon} title="Search"/>
            <SidebarItem Icon={LibraryMusicIcon} title="Your Library"/>

            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            <div className="sidebar_playlists">
                {playlists?.items?.map(playlist => (
                    <SidebarItem key={playlist.id} title={playlist.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
