import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';
import SensorDoorSharpIcon from '@mui/icons-material/SensorDoorSharp';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import LightsSwitch from './LightsSwitch';
import HomeStateJSON from './HomeStatus.json'
import { apiGetHouseStatus } from '../services/api'
import { useState, useEffect } from 'react';
import { useInterval } from '../hooks/useInterval';

const HomeStatus = () => {

  const [houseStatus, setHouseStatus] = useState(null);

  // Function to fetch and set the house status
  const fetchHouseStatus = async () => {
    const status = await apiGetHouseStatus();
    if (status !== null) {
      setHouseStatus(status);
    }
  };

  // Call the API initially when the component mounts
  useEffect(() => {
    fetchHouseStatus();
  }, []);

  // Use the useInterval hook to call the API every 3 seconds
  useInterval(() => {
    fetchHouseStatus();
  }, 3000);

  const iconMapping = {
    light: {
      1: LightbulbSharpIcon,
      0: LightbulbTwoToneIcon,
    },
    door: {
      1: SensorDoorOutlinedIcon,
      0: SensorDoorSharpIcon,
    },
  };

  const renderIcons = (iconData, type) => {
    return Object.keys(iconData).map((room) => {
      const value = iconData[room];
      const IconComponent = iconMapping[type][value] || null;
      console.log(IconComponent);
      return IconComponent ? (
        <IconComponent key={room} fontSize="large"
          className={`icon icon-${room}`} />
      ) : null;
    });
  }

  const renderSwitches = (rooms) => {
    return Object.keys(rooms).map((room) => {
      const value = rooms[room];
      return (<LightsSwitch key={room} room={room} initialState={value} />);
    });
  }

  return (
    <div className='home'>

      { renderIcons(HomeStateJSON.lights, 'light') }
      { renderIcons(HomeStateJSON.doors, 'door') }
      { renderSwitches(HomeStateJSON.lights) }

      <div>
        {/* Render the house status data */}
        {houseStatus && <pre>{JSON.stringify(houseStatus.title, null, 2)}</pre>}
      </div>

    </div>
  );
};

export default HomeStatus;