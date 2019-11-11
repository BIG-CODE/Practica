import React from 'react';
import { Link } from 'react-router-dom';

class NavBarSesion extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="table table-bordered" id="forma">
                <Link to="/Trainning/Top" id="avantica" >Avantica Trainning</Link>
                <Link className="top-log" to="/Trainning/Log_In" >Log in</Link>
                <Link id="logout" to="/Trainning/Sign_Up" >Sign up</Link>
            </div>
        );
    }
}

export default NavBarSesion;