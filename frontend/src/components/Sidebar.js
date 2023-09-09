import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';
import Profile from './Profile';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return ( 
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((val, key) =>{
          return(
            <li key={key} 
                className='SidebarRow'
                id = {window.location.pathname === val.link ? "active" : ""}
                > 
              <div id="icon"> {val.icon} </div>
              <div id="title"> {val.title} </div>
            </li>
          );
        })}
        <li className='SidebarProfile'>
          <Profile />
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}
 
export default Sidebar;