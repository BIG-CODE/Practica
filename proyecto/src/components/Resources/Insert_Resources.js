import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Insert_Resources extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: "",
            url: "",
            topic: { id_Topics: 0 },
            addId: []
        }
    }

    componentDidMount() {
        this.GetTopicId()
    }

    handleClick = async () => {
        const body = { description: this.state.description, url: this.state.url, topic: { id_Topics: this.state.topic.id_Topics } }
        console.log(body)
       const requesInfo = { method: 'POST', body: JSON.stringify(body), mode: "cors", headers: { 'Content-Type': 'application/json', "Authorization": token } }

        await fetch(Url + "resource", requesInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
        this.props.GetResource()
    }

    GetTopicId = async () => {
        let context = this
        const requesInfo = { method: 'GET', body: JSON.stringify(), mode: "cors", headers: { 'Content-Type': 'application/json', "Authorization": token } }

        await fetch(Url + "topic", requesInfo)
            .then(res => res.json())
            .then(res => { context.setState({ addId: res }) })
            .catch(error => console.error('Error:', error))
    }
    setId(id_Topics) {
        console.log(id_Topics)
        this.setState({ topic: { id_Topics: id_Topics } });
    }
    handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

    render() {
        return (
            <div className="box-resources">
                <h1 id="add-new">Add new resource</h1>
                <form className="form-resources">
                    <input
                        onChange={this.handleChange}
                        value={this.state.description}
                        type="text"
                        title="please fill out this field"
                        className="form-control description color"
                        name="description"
                        placeholder="Description" />
                    <input
                        onChange={this.handleChange}
                        value={this.state.url}
                        required type="text"
                        title="please fill out this field"
                        className="form-control url color"
                        type="text "
                        name="url"
                        placeholder="Url" />

                    <select
                        name="id_Topics"
                        value={this.state.topic.id_Topics}
                        onChange={(event) => this.setId(event.target.value)}
                        id="inputState"
                        className="form-control url color">
                        {
                            this.state.addId.map((item, index) => {
                                return <option className="Selected" key={index} >{item.id_Topics}</option>
                            })
                        }
                    </select>
                </form>
                <button onClick={this.handleClick}
                    type="button"
                    className="save-resources btn btn-primary">Save</button>
            </div>
        );
    }
}
const Url = "http://localhost:8080/"
const token = localStorage.getItem('Authorization')
export default Insert_Resources;