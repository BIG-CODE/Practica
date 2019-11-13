import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Insert_Topic extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
        }
    }
    handleClick = async (event) => {
        const body = {
            name: this.state.name,
        }

        await fetch("http://localhost:8080/topic", {
            method: 'POST',
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        this.props.GetTopic()
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
                    <h1 id="add-topic">Add Topic</h1>
                    <h5 id="name">Name:</h5>
                </div>
                <input value={this.state.name}
                    onChange={this.handleChange}
                    required type="text" title="please fill out this field"
                    className="form-control control color" placeholder="Topic Name" name="name" />
                <button onClick={this.handleClick} className=" btn btn-primary" id="save-btn">Save</button>

            </div>
        );
    }
}


export default Insert_Topic;