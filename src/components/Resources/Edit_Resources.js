import React from 'react';
class EditResources extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id, description: props.description, url: props.url,
            topic: { id_Topics: parseInt(id_Topics) }, addId: [],selectorState: props.actionAdd 
        }
    }
    componentDidMount() { this.GetTopicId() }

    componentDidUpdate(prevState) {
        if (prevState.id !== this.props.id) { this.setState({ id: this.props.id }) }
        if (prevState.url !== this.props.url) { this.setState({ url: this.props.url }) }
        if (prevState.description !== this.props.description) { this.setState({ description: this.props.description }) }
        if (prevState.id_Topics !== this.props.id_Topics) { this.setState({ topic: { id_Topics: this.props.id_Topics } }) }
    }
    handleUpdate = async () => {
        localStorage.removeItem("idTopic")
        this.props.GetResource()
        const body = { id: this.state.id, description: this.state.description, url: this.state.url, topic: { id_Topics: this.state.topic.id_Topics } }
        const requestInfo = { method: 'PUT', body: JSON.stringify(body), ...modeAndHeaders }
        await fetch(Url + "resource", requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
            this.state.selectorState= false
            
        
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
                <h1 id="add-new">Edit resource</h1>
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
                        name="url"
                        type="text"
                        placeholder="Url"
                        value={this.state.url}
                        onChange={this.handleChange}
                        className="form-control host color"
                        title="please fill out this field" />
                    <select
                        required
                        type="text"
                        id="inputState"
                        name="id_Topics"
                        value={this.state.topic.id_Topics}
                        className="form-control host color"
                        onChange={(event) => this.setId(event.target.value)} >
                        {
                            this.state.addId.map((item, index) => {
                                return <option className="Selected" key={index} >{item.id_Topics}</option>
                            })
                        }
                    </select>
                </form>
                <button
                    type="button"
                    onClick={this.handleUpdate}
                    className="btn btn-primary save-resources" >Save</button>
            </div>
        )
    }
}
const Url = "http://localhost:8080/"
const token = localStorage.getItem('Authorization')
const id_Topics = localStorage.getItem('idTopic')
const modes = { mode: "cors", headers: { 'Content-Type': 'application/json' } }
const modeAndHeaders = { mode: "cors", headers: { 'Content-Type': 'application/json', 'Authorization': token } }
export default EditResources;