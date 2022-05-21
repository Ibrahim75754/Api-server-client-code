import React, { useEffect, useState } from 'react';
import Header from './Header';

const Dashboard = () => {
    const [stations, setStations] = useState([]);
    useEffect(() => {
        fetch('https://agile-headland-68765.herokuapp.com/stations')
            .then(res => res.json())
            .then(data => setStations(data));
    }, []);
    return (
        <div className='py-5'>
            <Header></Header>
            <h1>All Station :</h1>
            <div>
                {stations.map(station =>
                <div><h3>name:{station.name}</h3> Range: {station.price}
                </div>)
                }   
            </div>
        </div>
    );
};

export default Dashboard;