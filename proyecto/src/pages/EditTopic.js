import React from 'react';
import './styles-addTopic.css';
import { Link } from 'react-router-dom'
class EditTopic extends React.Component {
    render() {
        return (
            <div className="toper">
                <section class="table table-bordered" id="forma" >
                    <Link to="/Trainning/Top" id="avantica" >Avantica Trainning</Link>
                    <Link to="/Trainning/topics" id="topics">Topics</Link>
                    <Link to="/Trainning/resources" id="resources">Resources</Link>
                    <Link to="/Trainning/Log_In" id="logout" >Log out</Link>
                </section>
                <div class="edit">
                    <table >
                        <p id="editarTopic">Edit Topic</p>
                    </table>
                     <th id="N">Name:</th>
                        <input className="form-control controler" type="text" placeholder="Name" />
                      <Link><button class="s btn">Save</button></Link> 
                       <Link to="/Trainning/topics" class="list">Back to list</Link>               
                </div>
            </div>
        );
    }
}
export default EditTopic