import React from 'react';
import './styles-Topics.css';
import { Link } from 'react-router-dom'
class MyTopics extends React.Component {
    render() {
        return (
            <div className="top">
                <section class="table table-bordered" id="forma" >
                    <Link to="/Trainning/Top" id="avantica" >Avantica Trainning</Link>
                    <Link to="/Trainning/topics"  id="topics">Topics</Link>
                    <Link to="/Trainning/resources"  id="resources">Resources</Link>
                    <Link to="" id="logout" >Log out</Link>
                </section>
                 <div class="container" id="cuerpo">
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
                <Link to="/Trainning/newtopics"><button  class="btn btn-primary" id="btnAzul"> New </button> </Link>  
                 </div>
                <div>
                </div>
            </div>
        );
    }
}
export default MyTopics