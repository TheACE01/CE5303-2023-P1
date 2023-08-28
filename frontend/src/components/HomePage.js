import React from 'react';
import Sidebar from "./Sidebar";


const HomePage = () => {
    return ( 
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Sidebar />
            <img src={require('../assets/home.jpg')} alt="" />
        </div>
    );
}
 
export default HomePage;