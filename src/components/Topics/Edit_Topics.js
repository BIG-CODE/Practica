import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class EditTopic extends React.Component {
    constructor(props) {
        super(props)
        this.state = { id_Topics: props.id_Topics, name: props.name, }
    }

    handleUpdate = async () => {
        const body = { id_Topics: this.state.id_Topics, name: this.state.name }
        const requestInfo = { method: 'PUT', body: JSON.stringify(body), ...modeAndHeaders }
        await fetch(Url + "topic", requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
         this.props.GetTopic()
    }

    componentDidUpdate(prevState) {
        if (prevState.name !== this.props.name) {
            this.setState({ name: this.props.name, id_Topics: this.props.id_Topics})
        }
    }

    handleChange = (event) => { this.setState({ name: event.target.value }) }

    render() {
        return (
            <div>
                <div>
                    <h1 id="add-topic">Edit Topic</h1>
                    <h5 id="name">Name:</h5>
                </div>
                <input
                    className="form-control control color"
                    title="please fill out this field"
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="Topic Name"
                    type="text"
                    name="name"
                    required />
                <button
                    className=" btn btn-primary"
                    onClick={this.handleUpdate}
                    id="save-btn">Save</button>
            </div>
        )
    }
}
const Url = "http://localhost:8080/"
const token = localStorage.getItem('Authorization')
const modeAndHeaders = { mode: "cors", headers: { 'Content-Type': 'application/json', 'Authorization': token } }
export default EditTopic;