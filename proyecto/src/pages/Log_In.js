import React from 'react';
import "../styles/Log_In.css";
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topic from "./My_Topics";
import NavBarSesion from "../components/NavBarSesion"
class Log_In extends React.Component {
    state = {
        isLoggedIn: false
    }
    handleLogin = responseFacebook => {
        //console.log(responseFacebook);
        this.setState({
            isLoggedIn: true
        });
    };
    componetClicked = () => console.log("clicked");
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {

            fbContent = (
                <Topic />
            )

        } else {
            fbContent = (
                <div className="container">
                    <NavBarSesion />
                    <div className="menu">
                        <button callback={this.handleLogin} className="btn face"><FacebookLogin
                            appId="698264744014242"
                            fields="name,email,picture"
                        /></button>
                        <div id="barra"></div>
                        <label className="label label-default">Log in with your email address</label>
                        <div id="caja-login">
                            <input className="form-control txt"
                                type="email" placeholder="Email" />

                            <input className="form-control txt"
                                type="password" placeholder="Password" />

                            <button onClick="" type="button"
                                className="btn login btn-success">Log in</button>

                            <h1 id="dont-account">Don´t have an account? </h1><Link to="/Trainning/Sign_Up" id="log">Sign up</Link>
                        </div>

                    </div>
                </div>
            )
        }
        return (
            <div>{fbContent}</div>
        );
    }
}
export default Log_In;
