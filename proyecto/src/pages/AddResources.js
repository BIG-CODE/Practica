import React from 'react';
import './styles-addTopic.css';
import { Link } from 'react-router-dom'
class AddResources extends React.Component {
    render() {
        return (
            <div className="res">
                <section class="table table-bordered" id="forma" >
                    <Link to="/Trainning/Top" id="avantica" >Avantica Trainning</Link>
                    <Link to="/Trainning/topics" id="topics">Topics</Link>
                    <Link to="/Trainning/resources" id="resources">Resources</Link>
                    <Link to="" id="logout" >Log out</Link>
                </section>
                <tr class="addres"><label id="add-new">Add new resource</label> </tr>
                <div class="adding">
                    <input className="form-control description" type="text" placeholder="Description" />
                    <input className="form-control url" type="url" name="" placeholder="Url" />
                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                            <a href="#">Node JS</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <button class="f btn">Save</button>
                    <Link to="/Trainning/resources" class="btn-back">Back to list</Link>
                </div>
               
            </div>

        );
    }
}
export default AddResources