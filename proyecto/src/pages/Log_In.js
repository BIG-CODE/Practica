import React from 'react';
import "./styles_Log_In.css";
import { Link } from 'react-router-dom'
class Log_In extends React.Component {
    render() {
        return (
            <div className="cajita_Log">
                <form class="table table-bordered" >
                    <Link to="/Trainning/Top" >Avantica Trainning</Link>
                    <Link to="/Trainning/Log_In" >Log in</Link>
                    <Link to="/Trainning/Sign_Up" >Sign up</Link>
                </form>
                <div className="menu">
                    <button class="btn btn-primary btn-lg active">Log in with Facebook</button>
                    <td id="barra"></td>
                   <label class="label label-default">Log in with your email address</label>
                    <input className="form-control"type="email" placeholder="Email" />
                     <input className="form-control" type="password" placeholder="Password" />
                     <td><button type="button" class="btn btn-success">Log in</button></td>
                     <h1>Don´t have an account? <Link to="/Trainning/Sign_Up" id="log">Sign up</Link></h1>

                </div>
            </div>
        );
    }
}
export default Log_In