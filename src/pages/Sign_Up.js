import React from 'react';
import '../styles/Sign_Up.css';
import { Link } from 'react-router-dom'
import NavBarSesion from "../components/NavBarSesion"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import 'bootstrap/dist/css/bootstrap.min.css';
class Sign_Up extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "", password: "", name: "",
            user_facebook: {
                id: parseInt(idUser),
                name: nameUser,
                email: emailUser,
                accessToken: accessToken
            }
        }
    }

    handleClick = async () => {
        const body = { email: this.state.email, password: this.state.password, name: this.state.name }

        const requestInfo = { method: 'POST', body: JSON.stringify(body), modes }
        console.log(body)
        await fetch(Url + "users", requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleLogin = async (responseFacebook) => {
        console.log(responseFacebook)
        const data = {
            id: responseFacebook['id'],
            name: responseFacebook['name'],
            email: responseFacebook['email'],
            accessToken: responseFacebook['accessToken']
        }
        console.log(data)
        const requestInfo = { method: 'POST', body: JSON.stringify(data), ...modes }
        await fetch(Url + "singupFB", requestInfo)
            .then(response => { if (response.ok) { return response.json() } throw new Error("Error to insert the data") })
            .catch(error => { console.log(error) })
    }

    render() {
        return (
            <div className="menu-sign">
                <NavBarSesion />
                <div className="menu-body">
                    <FacebookLogin
                        id='facebook_login_button'
                        appId="698264744014242"
                        fields="name,email,picture"
                        callback={this.handleLogin}
                        render={renderProps => (
                            <button
                                onClick={renderProps.onClick}
                                className='btn btn-lg btn-block facebook_login_button btn btn-primary btn-lg active'
                            >Sign in with Facebook </button>)} />
                    <div id="barra"></div>
                    <label className="label-default" id="texto">Sign up with your email address</label>
                    <form className="caja-sing">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control txt-s" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            className="form-control txt-s" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="form-control txt-s" />
                    </form>
                    <button
                        id="up"
                        type="button"
                        onClick={this.handleClick}
                        className="btn boton btn-success">Sign up</button>
                    <h5 className="footer">Already have an account?
                         <Link to="/Training/Log_In" id="sign"> Log in</Link>
                    </h5>
                </div>
            </div>
        );
    }
}
const Url = "http://localhost:8080/", modes = { mode: "cors", headers: { 'Content-Type': 'application/json' } }
const idUser = localStorage.getItem('USERFACEID')
const nameUser = localStorage.getItem('USERNAME'), emailUser = localStorage.getItem('USEREMAIL'), accessToken = localStorage.getItem('Authorization')
export default Sign_Up;