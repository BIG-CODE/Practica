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
                <div>
                    <button class="btn  face btn-primary btn-lg active">Sign in with Facebook</button>
                    <td id="barra"></td>
                    <ul><label class="label-default" id="texto">Sign up with your email address</label></ul>
                    <input className="form-control txt" type="email" placeholder="Email" />
                    <input className="form-control txt" type="password" placeholder="Password" />
                    <input className="form-control txt" type="text" placeholder="Name" />
                    <th class="sinup-verde"><button type="button" class="btn boton btn-success" id="up">Sign up</button></th>
                    <h1 className="last">Already have an account? <Link to="/Trainning/Log_In" id="sign">Log in</Link></h1>
                </div>
            </div>
        );
    }
}
export default Sign_Up