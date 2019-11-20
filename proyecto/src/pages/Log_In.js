import React from 'react';
import "../styles/Log_In.css";
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topic from "./My_Topics";
import NavBarSesion from "../components/NavBarSesion"
//import AuthService from './AuthService';
class Log_In extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }

    }
    handleLogin = responseFacebook => {
     console.log(responseFacebook);
        this.setState({
            isLoggedIn: true
        });
    };
    GetUser = async() => {
        const data = { password: this.password ,email: this.email}
        console.log(data)
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
            },
        }

       await fetch("http://localhost:8080/login", requestInfo)
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Login invalid");
            })
            .then(token => {console.log(token)})
            .catch(error => { console.log(error) })
    }

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

                            <input onChange={e => this.email = e.target.value}
                                className="form-control input-txt"
                                name="email"
                                type="email" placeholder="Email" />

                            <input onChange={e => this.password = e.target.value}
                                className="form-control input-txt"
                                name="password"
                                type="password" placeholder="Password" />

                        </div>
                        <button onClick={this.GetUser} type="button"
                            className="btn btn-login btn-success">Log in</button>
                        <h5>Don´t have an account?<Link to="/Training/Sign_Up" id="log"> Sign up</Link> </h5>
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
