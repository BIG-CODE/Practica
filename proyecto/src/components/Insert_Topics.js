import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Insert_Topic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    handleClick = async (event) => {

        const body = { name: this.name, }

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSb3luZXIiLCJpYXQiOjE1NzQxODUzODQsImV4cCI6MTU3NTA0OTM4NH0.wle2URKZxaOjnmdrCKgRNXgdQvG1FtGg7nJ_2n3chbTTPg8-3TpOkdLG9AvmaCYojBjgkG_HNYE9t64Vmxo7Vg'
            }
        }

        await fetch("http://localhost:8080/topic", requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        this.props.GetTopic()
    }

    render() {
        return (
            <div>
                <div>
                    <h1 id="add-topic">Add Topic</h1>
                    <h5 id="name">Name:</h5>
                </div>
                <input value={this.state.name}
                    onChange={e => this.name = e.target.value}
                    required type="text" title="please fill out this field"
                    className="form-control control color" placeholder="Topic Name" name="name" />
                <button onClick={this.handleClick} className=" btn btn-primary" id="save-btn">Save</button>

            </div>
        );
    }
}


export default Insert_Topic;