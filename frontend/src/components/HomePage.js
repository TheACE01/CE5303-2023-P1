import React from 'react';
import Sidebar from "./Sidebar";
import HomeState from './HomeState';
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
                <HomeState />
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