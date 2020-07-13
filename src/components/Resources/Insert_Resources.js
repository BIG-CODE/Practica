import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Insert_Resources extends React.Component {
    constructor(props) {
        super(props)

        this.state = { description: "", url: "", topic: { id_Topics: 0 }, addId: [] }
    }

    componentDidMount() {
        this.GetTopicId()
    }

    handleClick = async () => {
        const body = { description: this.state.description, url: this.state.url, topic: { id_Topics: this.state.topic.id_Topics } }
        const requesInfo = { method: 'POST', body: JSON.stringify(body), ...modeAndHeaders }

        await fetch(Url + "resource", requesInfo)
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
        this.props.GetResource()
    }

    GetTopicId = async () => {
        let context = this
        const requesInfo = { method: 'GET', modes }

        await fetch(Url + "topic", requesInfo)
            .then(res => res.json())
            .then(res => { context.setState({ addId: res }) })
            .catch(error => console.error('Error:', error))
    }
    setId(id_Topics) { this.setState({ topic: { id_Topics: id_Topics } }) }

    handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

    render() {
        return (
            <div className="box-resources">
                <h1 id="add-new">Add new resource</h1>
                <form className="form-resources">
                    <input
                        required
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        title="please fill out this field"
                        className="form-control descrip color" />
                    <input
                        required
                        type="text"
                        name="url"
                        placeholder="Url"
                        value={this.state.url}
                        onChange={this.handleChange}
                        title="please fill out this field"
                        className="form-control host color" />
                    <select
                        required
                        type="text"
                        id="inputState"
                        name="id_Topics"
                        className="form-control host color"
                        value={this.state.topic.id_Topics}
                        onChange={(event) => this.setId(event.target.value)} >
                        {this.state.addId.map((item, index) => {
                            return <option className="Selected" key={index} >{item.id_Topics}</option>
                        })} </select>
                </form>
                <button
                    type="button"
                    onClick={this.handleClick}
                    className="save-resources btn btn-primary">Save</button>
            </div>
        );
    }
}
const Url = "http://localhost:8080/", token = localStorage.getItem('Authorization')
const modeAndHeaders = { mode: "cors", headers: { 'Content-Type': 'application/json', 'Authorization': token } },
    modes = { mode: "cors", headers: { 'Content-Type': 'application/json' } }
export default Insert_Resources;