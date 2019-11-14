import React from 'react';
import '../styles/Sign_Up.css';
import { Link } from 'react-router-dom'
import NavBarSesion from "../components/NavBarSesion"
import 'bootstrap/dist/css/bootstrap.min.css';
class Sign_Up extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            password: "",
            email: "",
            addUser: [
            ]
        }
    }
    handleClick = event => {
        const body = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        }
        console.log(body)
       fetch("http://localhost:8080//users", {
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
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });

    }

    render() {
        return (
            <div className="menu-sign">
                <NavBarSesion />
                <div className="menu-body">
                    <button onClick="" className="btn  face btn-primary btn-lg active">Sign in with Facebook</button>
                    <div id="barra"></div>
                    <label className="label-default" id="texto">Sign up with your email address</label>
                    <form className="caja-sing">

                        <input value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control txt-s"
                            type="email" placeholder="Email"
                            name="email" />

                        <input value={this.state.password}
                            onChange={this.handleChange}
                            className="form-control txt-s"
                            type="password" placeholder="Password"
                            name="password" />

                        <input value={this.state.name}
                            onChange={this.handleChange}
                            className="form-control txt-s"
                            type="text" placeholder="Name"
                            name="name" /></form>


                    <button onClick={this.handleClick}
                        type="button"
                        className="btn boton btn-success"
                        id="up">Sign up</button>
                    <h5 className="footer">Already have an account? <Link to="/Trainning/Log_In" id="sign"> Log in</Link></h5>
                </div>
            </div>
        );
    }
}
export default Sign_Up;