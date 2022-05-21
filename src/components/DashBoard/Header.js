import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    const activeStyle = {
        color: "#229954",
        fontWeight: "bold",
    }
    return (
        <div className="text-start" style={{ marginBottom: '80px' }}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#006885" }}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <h1 className="text-bold d-inline" style={{ color: "#229954" }}>Turtle Venture</h1>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link  text-white" activeStyle={activeStyle} aria-current="page" to="/home">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-white" activeStyle={activeStyle} aria-current="page" to="/addstation">Add Station</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  text-white" activeStyle={activeStyle} aria-current="page" to="/managestation">Manage Stations</NavLink>
                            </li>
                            
                        </ul>
                        {user?.email ?
                            <span className="navbar-text">
                                
                                <button onClick={logout} className="btn btn-success ms-2">LogOut</button>
                            </span>
                            :
                            <span className="navbar-text">
                                <NavLink className="" aria-current="page" to='/login'><button className="btn btn-success">Login</button></NavLink>
                            </span>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;