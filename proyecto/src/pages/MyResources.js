import React from 'react';
import './Topics.css';
import { Link } from 'react-router-dom'
class MyResources extends React.Component {
    render() {
        return (
            <div>
                <div className="table table-bordered" id="formas" >
                    <Link id="avantica" to="/Trainning/Top"  >Avantica Trainning</Link>
                    <Link id="topics" to="/Trainning/topics" >Topics</Link>
                    <Link to="/Trainning/resources" id="resources">Resources</Link>
                    <Link to="" id="logout" >Log out</Link>
                </div>
                <div className="container" id="cuerpo">
                    <p id="titulo-r">My Resources</p>
                    <table className="table table-striped">
                        <thead >
                            <tr>
                                <th>Id</th>
                                <th >Description Name</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td><label id="recurso">10</label> </td>
                                <td id="descripcion" >Microservice with spring boot</td>
                            </tr>
                            <tr>
                                <td><label id="recurso">11</label> </td>
                                <td id="descripcion">Build Microservice</td>
                            </tr>
                            <tr>
                                <td><label id="recurso">12</label> </td>
                                <td id="descripcion">Spring boot JPA</td>
                            </tr>
                            <tr>
                                <td><label id="recurso">13</label> </td>
                                <td id="descripcion" >Concurrency</td>
                            </tr>
                            <tr>
                                <td><label id="recurso">14</label> </td>
                                <td id="descripcion" >multithreading-patterns-presentation</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link className="enlace" to="/Trainning/addresources"><button className="btn btn-primary" id="btnAzul"> New </button> </Link>
                </div>
                <div>
                </div>
            </div>
        );
    }
}
export default MyResources