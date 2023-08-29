import React from 'react';
import Sidebar from "./Sidebar";
import HomeStatus from './HomeStatus';
import LightsSwitch from './LightsSwitch';
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
                <div className='Control'>
                <LightsSwitch
                    key={'10'}
                    room={'Turn off all lights'}
                    initialState={'on'}
                />
                </div>
            </div>        
        </div>
        
    );
}
 
export default HomePage;