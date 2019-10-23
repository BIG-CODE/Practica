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
                <form class="table table-bordered" >
                    <Link to="/Trainning/Top" >Avantica Trainning</Link>
                    <Link to="/Trainning/Log_In" >Log in</Link>
                    <Link to="/Trainning/Sign_Up" >Sign up</Link>
                </form>
                <div className='container'>
                    <p> Top ten topics </p>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th> Topic </th>
                                <th>Resources</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Spring boot</th>
                                <th>5</th>
                            </tr>
                            <tr>
                                <th>Concurrency</th>
                                <th>4</th>
                            </tr>
                            <tr>
                                <th>Node JS</th>
                                <th>2</th>
                            </tr>
                            <tr>
                                <th>REST</th>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th>NoSQL</th>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th>Angular</th>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th>Testing</th>
                                <th>0</th>
                            </tr>
                            <tr>
                                <th>ORM</th>
                                <th>0</th>
                            </tr>
                            <tr>
                                <th>OAUTH</th>
                                <th>0</th>
                            </tr>
                            <tr>
                                <th>SOAP</th>
                                <th>0</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Home;