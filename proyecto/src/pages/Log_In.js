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
                <div className="menu-login">
                    <NavBarSesion />
                    <div className="menu-space">
                        <button className="btn face"><FacebookLogin
                            appId="698264744014242"
                            fields="name,email,picture"
                            callback={this.handleLogin}
                        /></button>
                        <div id="barra-gris"></div>
                        <label className="label label-default text-login">Log in with your email address</label>
                        <div className="caja-login">
                            <input className="form-control input-txt"
                                type="email" placeholder="Email" />

                            <input className="form-control input-txt"
                                type="password" placeholder="Password" />


                        </div>
                        <button onClick="" type="button"
                            className="btn btn-login btn-success">Log in</button>

                        <h5>Don´t have an account?<Link to="/Trainning/Sign_Up" id="log"> Sign up</Link> </h5>

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
