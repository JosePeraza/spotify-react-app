import React from 'react';
import "../css/Player.css";
import ResponsiveDrawer from "./Drawer";

function Player({ spotify }) {
    return (
        <div className="player">
            <ResponsiveDrawer spotify={spotify} />
        </div>
    )
}

export default Player
