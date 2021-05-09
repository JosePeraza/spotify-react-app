import React from 'react';
import "../css/sidebarItem.css";

function SidebarItem({ title, Icon }) {
    return (
        <div className="sidebarItem">
            {Icon && <Icon className="sidebarIcon"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarItem
