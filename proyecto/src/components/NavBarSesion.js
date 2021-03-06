import React from 'react';
import { Link } from 'react-router-dom';

class NavBarSesion extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light form-control">
                <ul className="navbar-nav avantica mr-auto">
                    <Link className="nav-link" to="/Training/Top">Avantica training</Link>
                </ul>
                <ul className="navbar-nav log-in mr-auto">
                    <Link className="nav-link" to="/Training/Log_In">Log In</Link>
                </ul>
                <ul className="navbar-nav sign-up mr-auto">
                    <Link className="nav-link" to="/Training/Sign_Up">Sign Up</Link>
                </ul>
            </nav>
        );
    }
}

export default NavBarSesion;