import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'
class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Topic: "text"

        }
    }
    render() {
        return (
            <div>
                <form class="table table-bordered" id="tabla">
                    <Link to="/Trainning/Top" >Avantica Trainning</Link>
                    <Link to="/Trainning/Log_In" >Log in</Link>
                    <Link to="/Trainning/Sign_Up" >Sign up</Link>
                </form>
                <div className='container'>
                    <p> Top ten topics </p>
                    <table className="table table-striped">
                        <thead>
                            <tr> <th id="fila"> Topic </th>
                                <th id="fila">Resources</th></tr> 
                        </thead>
                        <tbody>                           
                               <tr> <th id="fila">Spring boot</th>
                                <th>5</th></tr>
                                                        
                               <tr> <th id="fila">Concurrency</th>
                                <th id="fila">4</th></tr>
                                                       
                                <tr><th id="fila">Node JS</th>
                                <th>2</th></tr>
                                                       
                                <tr><th id="fila">REST</th>
                                <th id="fila">1</th></tr>
                                                       
                                <tr><th id="fila">NoSQL</th>
                                <th id="fila">1</th></tr>
                                                      
                                 <tr><th id="fila">Angular</th>
                                <th id="fila">1</th></tr>
                                                       
                                <tr><th id="fila">Testing</th>
                                <th id="fila">0</th></tr>
                                                       
                                <tr><th id="fila">ORM</th>
                                <th id="fila">0</th></tr >
                                               
                                <tr><th id="fila">OAUTH</th>
                                <th id="fila">0</th></tr> 

                                <tr><th id="fila">SOAP</th>
                                <th id="fila">0</th></tr>                    
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Home;