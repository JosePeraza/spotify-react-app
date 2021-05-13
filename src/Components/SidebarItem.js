import React from 'react';
import "../css/sidebarItem.css";
import "../css/Themes.css";
import { useDatalayerValue } from '../DataLayer';

function SidebarItem({ title, Icon }) {
    const [{lightmode}] = useDatalayerValue();

    return (
        <div className={`sidebarItem ${lightmode === false ? `dark_sidebarItem`: `bright_sidebarItem`}`}>
            {Icon && <Icon className="sidebarIcon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarItem
