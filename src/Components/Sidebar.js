import React from 'react';
import "../css/Sidebar.css";
import SidebarItem from './SidebarItem';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDatalayerValue } from '../DataLayer';

function Sidebar() {
    const [{playlists}] = useDatalayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo" />
            <SidebarItem Icon={HomeIcon} title="Home"/>
            <SidebarItem Icon={SearchIcon} title="Search"/>
            <SidebarItem Icon={LibraryMusicIcon} title="Your Library"/>

            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarItem key={playlist.id} title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
