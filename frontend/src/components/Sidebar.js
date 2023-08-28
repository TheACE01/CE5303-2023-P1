import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';
import Profile from './Profile';

const Sidebar = () => {
  return ( 
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((val, key) =>{
          return(
            <li key={key} 
                className='SidebarRow'
                id = {window.location.pathname == val.link ? "active" : ""}
                onClick={()=> {window.location.pathname = val.link}}> 
              <div id="icon"> {val.icon} </div>
              <div id="title"> {val.title} </div>
            </li>
          );
        })}
        <li className='SidebarProfile'>
          <Profile />
        </li>
      </ul>
    </div>
  );
}
 
export default Sidebar;