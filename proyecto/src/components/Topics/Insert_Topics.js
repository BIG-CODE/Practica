import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Insert_Topic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id_Topics:0,
            name: "",
        }

    }

    handleClick = async () => {

        const body = { name: this.state.name }
        let token = localStorage.getItem('Authorization')
        console.log(token)
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token
            }
        }

        await fetch("http://localhost:8080/topic", requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        this.props.GetTopic()
    }

    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
         }); }

    render() {
        return (
            <div>
                <div>
                    <h1 id="add-topic">Add Topic</h1>
                    <h5 id="name">Name:</h5>
                </div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}
                    required type="text" title="please fill out this field"
                    className="form-control control color" placeholder="Topic Name" name="name" />
                <button onClick={this.handleClick} className=" btn btn-primary" id="save-btn">Save</button>

            </div>
        );
    }
}


export default Insert_Topic;