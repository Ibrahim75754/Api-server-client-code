import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManageStation = () => {
    const [stations, setStations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/stations')
            .then(res => res.json())
            .then(data => setStations(data));
    }, []);
    let id = 1;

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/stations/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        swal("Station has been deleted!", {
                            icon: "success",
                          });
                        const remaining = stations.filter(station => station._id !== id);
                        setStations(remaining);
                    }
                })
              
            } 
            else {
              swal("Product is safe!");
            }
          });
       
    }
    return (
        <div>
            <h1>Manage All Station</h1>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Image</th>
                            <th scope="col">Station Name</th>
                            <th scope="col">Range</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stations.map(station => <tr>
                                <th scope="row">{id++}</th>
                                <td><img style={{ width: "100px", height: "100px" }} src={station.img} alt="" /></td>
                                <td>{station.name}</td>
                                
                                <td>{station.price} hz</td>
                                <td><Link to={`managestation/${station._id}`}><button className="btn btn-success mb-2">Update</button></Link><br /><button onClick={() => handleDelete(station._id)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageStation;