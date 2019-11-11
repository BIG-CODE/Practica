import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="table table-bordered" id="formas" >
                    <Link id="avantica" to="/Trainning/Top"  >Avantica Trainning</Link>
                    <Link id="topics" to="/Trainning/newtopics" >Topics</Link>
                    <Link to="/Trainning/addresources" id="resources">Resources</Link>
                    <Link to="/Trainning/Top" id="logout" >Log out</Link>
                </div>
        );
    }
}

export default NavBar;