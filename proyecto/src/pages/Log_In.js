import React from 'react';
import "../styles/Log_In.css";
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarSesion from "../components/NavBarSesion"
import NavSelector from "./HomeSelector"
import Home from './Home_Page'
class Log_In extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: "", password: "", isLoggedIn: false, navBar: false }
    }

    handleLogin = async (responseFacebook) => {
        const data = { email: responseFacebook["email"], accessToken: responseFacebook["accessToken"] }
        const requestInfo = { method: 'POST', body: JSON.stringify(data), ...modes }
        await fetch(Url + "loginFB", requestInfo)
            .then(response => {
                if (response.ok) {
                    this.setState({ isLoggedIn: true, navBar: true  })
                    return response.json()
                } throw new Error("Login invalid")
            })
            .then(token => { localStorage.setItem("Authorization", token['Authorization']) })
            .catch(error => { console.log(error) })
    }

    GetUser = async () => {
        const data = { password: this.state.password, email: this.state.email }
        const requestInfo = { method: 'POST', body: JSON.stringify(data), modes }
        await fetch(Url + "login", requestInfo)
            .then(response => {
                if (response.ok) {
                    this.setState({ isLoggedIn: true })
                    return response.json()
                } throw new Error("Login invalid")

            })
            .then()
            .then(token => { localStorage.setItem("Authorization", token['Authorization']) })
            .catch(error => { console.log(error) })
    }

    handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

    render() {
        let fbContent;
        if (this.state.isLoggedIn === true) {
            fbContent = (
                <div> 
                    <NavSelector selectorState={this.state.navBar} />
                     <Home/>
                </div>


            )
        } else {
            fbContent = (
                <div className="menu-login">
                    <NavBarSesion />
                    <div className="menu-space">
                        <FacebookLogin
                            id='facebook_login_button'
                            appId="698264744014242"
                            fields="name,email,picture"
                            callback={this.handleLogin}
                            render={renderProps => (
                                <button
                                    className='btn btn-lg btn-block facebook_login_button btn btn-primary btn-lg active'
                                    onClick={renderProps.onClick}>Login with Facebook
                                </button>
                            )}
                        />
                        <div id="barra-gris"></div>
                        <label className="label label-default text-login">Log in with your email address</label>
                        <div className="caja-login">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="form-control input-txt" />
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className="form-control input-txt" />
                        </div>
                        <button
                            className="btn btn-login btn-success"
                            onClick={this.GetUser}
                            type="button">Log in</button>
                        <h5>Don´t have an account?
                            <Link to="/Training/Sign_Up" id="log"> Sign up</Link>
                        </h5>
                    </div>
                </div>)
        }
        return (<div>{fbContent}</div>)
    }
}
const Url = "http://localhost:8080/"
const modes = { mode: "cors", headers: { 'Content-Type': 'application/json' } }
export default Log_In;
