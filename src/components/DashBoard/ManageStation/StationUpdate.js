import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import Header from '../Header';


const StationUpdate = () => {
    const { id } = useParams();
    const [station, setStation] = useState();
    
    useEffect(() => {
        fetch(`https://agile-headland-68765.herokuapp.com/stations/${id}`)
            .then(res => res.json())
            .then(data =>
                setStation(data));
    }, [id]);

    //Update part

    const chaneImg = e => {
        const updateImg = e.target.value;
        const update = { img: updateImg, name: station.name, price: station.price };
        setStation(update);
    }

    const chaneName = e => {
        const updateName = e.target.value;
        const update = { name: updateName, img:station.img, price: station.price };
        setStation(update);

    }
    const chanePrice = e => {
        const updatePrice = e.target.value;
        const update = { name: station.name,img:station.img, price: updatePrice };
        setStation(update);
    }

    // console.log(formData);
    const handleUpdate = e => {
        fetch(`https://agile-headland-68765.herokuapp.com/stations/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(station)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Good job!", "Station Update successfully", "success");
                }
            })
        e.preventDefault();

    }
    return (
        <div>
            <Header></Header>
            <h1 className='my-5'>Update Station</h1>
            <div>
            <form onSubmit={handleUpdate} className="d-flex flex-column justify-content-center align-items-center">
                        <input className="w-50 mb-3" type="text" onChange={chaneImg} value={station?.img || ''} />
                        <input className="w-50 mb-3" type="name" onChange={chaneName} value={station?.name || ''} />
                        <input className="w-50 mb-3" onChange={chanePrice} type="number" value={station?.price || ''} />
                        
                        <input className="w-50 mb-3" type="submit" />
                    </form>
            </div>


        </div>
    );
};

export default StationUpdate;