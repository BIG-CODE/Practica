import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css"

class NavBar extends React.Component {
    state = {

    }
    render() {
        return (
            <div><nav className="navbar navbar-expand-lg navbar-light bg-light form-control">

                <ul className="navbar-nav training mr-auto">
                    <Link className="nav-link " to="/Training/Top">Avantica training</Link>
                </ul>
                <ul className="navbar-nav topic mr-auto">
                    <Link className="nav-link " to="/Training/My_Topics">Topic</Link>

                </ul>
                <ul className="navbar-nav resources mr-auto">
                    <Link className="nav-link " to="/Training/My_Resources">Resources</Link>

                </ul>
                <ul className="navbar-nav signup  mr-auto">
                    <Link className="nav-link " to="/Training/Sign_Up">Log Out</Link>
                </ul>
            </nav>

            </div>


        );
    }
}

export default NavBar;