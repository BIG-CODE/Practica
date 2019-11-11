import React from 'react';
import '../styles/Sign_Up.css';
import { Link } from 'react-router-dom'
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

    };

    render() {
        return (
            <div className="container">
                <div className="table table-bordered" id="forma" >
                    <Link to="/Trainning/Top" id="avantica" >Avantica Trainning</Link>
                    <Link className="top-log" to="/Trainning/Log_In" >Log in</Link>
                    <Link id="logout" to="/Trainning/Sign_Up" >Sign up</Link>
                </div>
                <div className="menu">
                    <button onClick="" className="btn  face btn-primary btn-lg active">Sign in with Facebook</button>
                    <div id="barra"></div>
                    <ul><label className="label-default" id="texto">Sign up with your email address</label></ul>
                    <div className="textbox">
                        <input value={this.state.email}
                            onChange={this.handleChange}
                            className="form-control txt"
                            type="email" placeholder="Email"
                            name="email" />

                        <input value={this.state.password}
                            onChange={this.handleChange}
                            className="form-control txt"
                            type="password" placeholder="Password"
                            name="password" />

                        <input value={this.state.name}
                            onChange={this.handleChange}
                            className="form-control txt"
                            type="text" placeholder="Name"
                            name="name" /></div>


                    <button onClick={this.handleClick}
                        type="button"
                        className="btn boton btn-success"
                        id="up">Sign up</button>

                    <h1
                        className="last">Already have an account?
                     <Link to="/Trainning/Log_In" id="sign">Log in</Link>
                    </h1>
                </div>
            </div>
        );
    }
}
export default Sign_Up