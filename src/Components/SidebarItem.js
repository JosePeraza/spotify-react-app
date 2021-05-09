import React from 'react';
import "../css/sidebarItem.css";

function SidebarItem({ title, Icon }) {
    return (
        <div className="sidebarItem">
            <p>{title}</p>
        </div>
    )
}

export default SidebarItem
