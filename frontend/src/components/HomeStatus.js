import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';
import SensorDoorSharpIcon from '@mui/icons-material/SensorDoorSharp';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import LightsSwitch from './LightsSwitch';
import HomeStateJSON from './HomeStatus.json'

const HomeStatus = () => {

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
          className={`icon icon-${room}`}  />
      ) : null;
    });
  }

  const renderSwitches = (rooms) => {
    return Object.keys(rooms).map((room) => {
      const value = rooms[room];
      return (<LightsSwitch key={room} room={room} initialState={value}/>);
    });
  }

  return (
    <div className='home'>

      {renderIcons(HomeStateJSON.lights, 'light')}
      {renderIcons(HomeStateJSON.doors, 'door')}

      {renderSwitches(HomeStateJSON.lights)}
      
    </div>
  );
};

export default HomeStatus;

/**
 * 
 * 
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









      <ul className="card">
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {data?.map((item) => (
          <div key={item.id} className={`icon icon-${item.id}`}>
            {item.userId === 1 && item.completed && (
              <LightbulbSharpIcon fontSize="large" />
            )}
            {item.userId === 1 && !item.completed && (
              <LightbulbTwoToneIcon fontSize="large" />
            )}
            {item.userId === 1 && !item.completed && (
              <SensorDoorOutlinedIcon fontSize="large" />
            )}
            {item.userId === 1 && item.completed && (
              <SensorDoorSharpIcon fontSize="large" />
            )}
          </div>))}
      </ul>
 */
