import React, { useState, useEffect } from 'react';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';
import SensorDoorSharpIcon from '@mui/icons-material/SensorDoorSharp';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import LightsSwitch from './LightsSwitch';
import HomeStateJSON from './HomeState.json'


const HomeState = () => {
  const [stateData, setStateData] = useState([]);

  return (
    <div className='home'>
      {HomeStateJSON.map(item => (
        <div key={item.id} className={`icon icon-${item.id}`}>
          {item.type === 'light' && item.state === 'on' && (
            <LightbulbSharpIcon fontSize="large" />
          )}
          {item.type === 'light' && item.state === 'off' && (
            <LightbulbTwoToneIcon fontSize="large" />
          )}
          {item.type === 'door' && item.state === 'on' && (
            <SensorDoorOutlinedIcon fontSize="large" />
          )}
          {item.type === 'door' && item.state === 'off' && (
            <SensorDoorSharpIcon fontSize="large" />
          )}
        </div>
      ))}
      {HomeStateJSON.filter(item => item.type === 'light')
        .map(item => (
          <LightsSwitch
            key={item.id}
            room={item.room}
            initialState={item.state === 'on'}
          />
        ))}
    </div>
  );
};

export default HomeState;


