import React from 'react';
import { Link } from 'react-router-dom'
class EditTopic extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }
    handleClick = event => {
        const body = {
            name: this.state.name,
        }

        fetch("http://localhost:8080/topic", {
            method: 'POST',
            body: JSON.stringify(body),
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
            <div>
                <div>
                    <p id="nuevoTopic">Add Topic</p>
                    <div id="nom">Name:</div>
                </div>
                <input value={this.state.name}
                    onChange={this.handleChange}
                    required type="text" title="please fill out this field"
                    className="form-control control color" placeholder="Name" name="name" />
                <button onClick={this.handleClick} className="save btn btn-primary">Save</button>
               
            </div>
        );
    }
}

export default EditTopic;