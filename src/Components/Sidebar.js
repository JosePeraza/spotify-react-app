import React from 'react';
import "../css/Sidebar.css";
import SidebarItem from './SidebarItem'

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo" />
            <SidebarItem title="Home"/>
            <SidebarItem title="Serch"/>
            <SidebarItem title="Your Library"/>
        </div>
    )
}

export default Sidebar
