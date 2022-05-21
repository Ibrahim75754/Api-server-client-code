import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [stations, setStations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/stations')
            .then(res => res.json())
            .then(data => setStations(data));
    }, []);
    return (
        <div className='py-5'>
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