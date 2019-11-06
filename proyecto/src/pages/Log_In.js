import React from 'react';
import "./Log_In.css";
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
class Log_In extends React.Component {

    componentDidMount() {
     
    }
    handleLogin = responseFacebook => {
        console.log(responseFacebook);
    }
    render() {
        return (
            <div className="container">
                <div className="table table-bordered" id="forma">
                    <Link to="/Trainning/Top" id="avantica" >Avantica Trainning</Link>
                    <Link className="top-log"  to="/Trainning/Log_In" >Log in</Link>
                    <Link id="logout"  to="/Trainning/Sign_Up" >Sign up</Link>
                </div>
                <div className="menu">
                   <button className="btn  face "  ><FacebookLogin
                        appId="698264744014242"
                        fields="name,email,picture"
                        callback={this.handleLogin}                                                          
                    /></button> 
                    <div id="barra"></div>
                    <label className="label label-default">Log in with your email address</label>
                    <input className="form-control txt" type="email" placeholder="Email" />
                    <input className="form-control txt" type="password" placeholder="Password" />
                    <button onClick="" type="button" className="btn login btn-success">Log in</button>
                    <h1>Don´t have an account? </h1><Link to="/Trainning/Sign_Up" id="log">Sign up</Link>
                </div>
            </div>
        );
    }
}
export default Log_In