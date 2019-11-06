import React from 'react';
import './Topics.css';
import { Link } from 'react-router-dom'
class MyTopics extends React.Component {
    render() {
        return (
            <div className="top">
                <div className="table table-bordered" id="formas" >
                    <Link id="avantica" to="/Trainning/Top"  >Avantica Trainning</Link>
                    <Link id="topics" to="/Trainning/topics" >Topics</Link>
                    <Link to="/Trainning/resources" id="resources">Resources</Link>
                    <Link to="" id="logout" >Log out</Link>
                </div>
                <div className="container" id="cuerpo">
                    <p id="titulo">My topics</p>
                    <table className="table table-striped">
                        <thead >
                            <tr>
                                <th>Id</th>
                                <th >Name</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td><label id="tema">4</label> </td>
                                <td id="nombre" >Node JS</td>
                            </tr>
                            <tr>
                                <td><label id="tema">5</label> </td>
                                <td id="nombre">NoSQL</td>
                            </tr>
                            <tr>
                                <td><label id="tema">9</label> </td>
                                <td id="nombre">OAUTH</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/Trainning/newtopics"><button className="btn btn-primary" id="btn-new"> New </button> </Link>
                </div>
            </div>
        );
    }
}
export default MyTopics