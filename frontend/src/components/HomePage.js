import React from 'react';
import Sidebar from "./Sidebar";
import HomeStatus from './HomeStatus';
import ControlBar from './ControlBar';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';


const HomePage = () => {
    return ( 
        <div>
            <div className='topBar'>
                <AddHomeWorkIcon /> 
                < h2>   SmartHome</h2> 
            </div>
            <div className='container'>
                <Sidebar />
                <HomeStatus />
                <ControlBar />
            </div>        
        </div>
        
    );
}
 
export default HomePage;