import React, { useState, useEffect } from 'react';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';
import SensorDoorSharpIcon from '@mui/icons-material/SensorDoorSharp';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import LightsSwitch from './LightsSwitch';
import HomeStateJSON from './HomeState.json'
import { useFetch } from '../hooks/useFetch';
import { usePost } from '../hooks/usePost';

const HomeStatus = () => {

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );

  const postData = {
    title: 'Hello World',
    body: 'This is the content of the post.',
    userId: 1,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (

    <div className='home'>

      <ul className="card">
        {error2 && <li>Error:! {error}</li>}
        {loading2 && <li>Loading...!</li>}
        <p>Post created with ID: </p>
        {data2 && <p>{data2.id}</p>};
      </ul>

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

export default HomeStatus;

/**
 * 
 * {HomeStateJSON.map(item => (
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
 */
