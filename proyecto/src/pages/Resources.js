import React from 'react';
import './styles-Topics.css';
import { Link } from 'react-router-dom'
class Resources extends React.Component {
    render() {
        return (
            <div className="cabeza">
                <section class="table table-bordered" id="forma" >
                    <Link to="/Trainning/Top" id="avantica" >Avantica Trainning</Link>
                    <Link to="/Trainning/topics"  id="topics">Topics</Link>
                    <Link to="/Trainning/resources"  id="resources">Resources</Link>
                    <Link to="/Trainning/Log_In" id="logout" >Log out</Link>
                </section>
                 <div class="container" id="centro">
                     <p id="temario">My Resources</p>
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
                <Link to="/Trainning/addresources"><button  class="btn btn-primary" id="btnAzul"> New </button> </Link>  
                 </div>
                <div>
                </div>
            </div>
        );
    }
}
export default Resources