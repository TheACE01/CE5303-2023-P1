import * as React from 'react';
import Switch from '@mui/material/Switch';

const LightsSwitch = ({ room, initialState }) => {
    const [checked, setChecked] = React.useState(initialState);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log(checked);
        console.log({room})
    };    

    return (
        <div className={`switch switch-${room}`}>
        <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            color="warning"
        />
        <p>{room}</p>
        </div>
    );
}

export default LightsSwitch;
