import React from 'react';
import './styles_Sign_Up.css';
import { Link } from 'react-router-dom'
class Sign_Up extends React.Component {
    render() {
        return (
            <div className="cajita">
                <form class="table table-bordered" >
                    <Link to="/Trainning/Top" >Avantica Trainning</Link>
                    <Link to="/Trainning/Log_In" >Log in</Link>
                    <Link to="/Trainning/Sign_Up" >Sign up</Link>
                </form>
                <div className="container main">
                    <button class="btn btn-primary btn-lg active" id="1">Sign in with Facebook</button>
                    <td id="barra"></td>
                   <h2><label class="label label-default" id="texto">Log in with your email address</label></h2>
                    <input className="form-control" type="email" placeholder="Email"/>
                     <input className="form-control" type="password" placeholder="Password"   />
                     <input className="form-control" type="text" placeholder="Name"  />
                     <th><button type="button" class="btn btn-success" id="up">Sing up</button></th>
                     <h1 className="last">Already have an account? <Link to="/Trainning/Log_In" id="sign">Log in</Link></h1>
                </div>
            </div>
        );
    }
}
export default Sign_Up