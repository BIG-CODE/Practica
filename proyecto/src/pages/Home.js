import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="table table-bordered" id="forma" >
                <Link id="avantica" to="/Trainning/Top"  >Avantica Trainning</Link>
                    <Link id="topics" to="/Trainning/topics" >Topics</Link>
                    <Link to="/Trainning/resources" id="resources">Resources</Link>
                    <Link className="top-log" to="/Trainning/Log_In" >Log in</Link>
                    <Link id="logout" to="/Trainning/Sign_Up" >Sign up</Link>
                </div>
                <div className='container'>
                    <p> Top ten topics </p>
                    <table className="table table-striped">
                        <thead>
                            <tr> <th id="fila"> Topic </th>
                                <th id="fila">Resources</th></tr>
                        </thead>
                        <tbody>
                            <tr> <td id="fila">Spring boot</td>
                                <td id="fila">5</td></tr>

                            <tr> <td id="fila">Concurrency</td>
                                <td id="fila">4</td></tr>

                            <tr><td id="fila">Node JS</td>
                                <td id="fila">2</td></tr>

                            <tr><td id="fila">REST</td>
                                <td id="fila">1</td></tr>

                            <tr><td id="fila">NoSQL</td>
                                <td id="fila">1</td></tr>

                            <tr><td id="fila">Angular</td>
                                <td id="fila">1</td></tr>

                            <tr><td id="fila">Testing</td>
                                <td id="fila">0</td></tr>

                            <tr><td id="fila">ORM</td>
                                <td id="fila">0</td></tr >

                            <tr><td id="fila">OAUTH</td>
                                <td id="fila">0</td></tr>

                            <tr><td id="fila">SOAP</td>
                                <td id="fila">0</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
function Tabla(props) {
    let data = props.data
    let contenido = data.map((item, index) => {
        console.log(item)

        return (
            <tr key={index}>
                <th>{item.id}</th>
                <th>{item.description}</th>
                <th>{item.url}</th>
                <th>{item.topic.id_Topics}</th>
                <th>
                    <div>
                        <button className="btn btn-info">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </th>
            </tr>
        );
    })
    console.log(props.data)
    return contenido;
}
export default Home;