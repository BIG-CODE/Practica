import React from 'react';
import '../styles/Sign_Up.css';
import { Link } from 'react-router-dom'
import NavBarSesion from "../components/NavBarSesion"
import 'bootstrap/dist/css/bootstrap.min.css';
class Sign_Up extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleClick = async (event) => {

        const body = { email: this.email, password: this.password, name: this.name }
        console.log(body)
        await fetch("http://localhost:8080/users", {
            method: 'POST',
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    render() {
        return (
            <div className="menu-sign">
                <NavBarSesion />
                <div className="menu-body">
                    <button className="btn  face btn-primary btn-lg active">Sign in with Facebook</button>
                    <div id="barra"></div>
                    <label className="label-default"
                        id="texto">Sign up with your email address</label>
                    <form className="caja-sing">

                        <input
                            onChange={e => this.email = e.target.value}
                            className="form-control txt-s"
                            type="email"
                            placeholder="Email"
                            name="email" />

                        <input
                            onChange={e => this.password = e.target.value}
                            className="form-control txt-s"
                            type="password"
                            placeholder="Password"
                            name="password" />

                        <input
                            onChange={e => this.name = e.target.value}
                            className="form-control txt-s"
                            type="text"
                            placeholder="Name"
                            name="name" />
                    </form>

                    <button onClick={this.handleClick}
                        type="button"
                        className="btn boton btn-success"
                        id="up">Sign up</button>
                    <h5 className="footer">Already have an account?
                         <Link to="/Training/Log_In"
                            id="sign"> Log in</Link></h5>
                </div>
            </div>
        );
    }
}
export default Sign_Up;