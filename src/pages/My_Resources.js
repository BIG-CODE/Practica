import React from 'react';
import '../styles/My_Resources.css';
import ResourcesSelector from "../components/Resources/ResourcesSelector"
import NavBar from "../components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
class MyResource extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            description: "",
            url: "",
            topic: {
                id_Topics: 0
            },
            addResouce: [],
            addTopics: [],
            actionAdd: true
        }
    }

    componentDidMount() {
        this.GetResource()
    }

    GetResource = async () => {
        let context = this
        const requestInfo = { method: 'GET', modes }
        await fetch(Url + "resource", requestInfo)
            .then(res => res.json())
            .then(res => { context.setState({ addResouce: res }) })
            .catch(error => console.error('Error:', error))
    }

    resourceDelete = async (id) => {
        const requestInfo = { method: 'DELETE', ...modeAndHeaders }
        await fetch(Url + "resource/" + id, requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
        this.GetResource()
    }
    setResource = (id, description, url, id_Topics) => {
        localStorage.setItem('idTopic', id_Topics)
        this.setState({ id: id, description: description, url: url, topic: { id_Topics: id_Topics }, actionAdd: true })
    }
    render() {
        return (
            <div className="box-resources">
                <NavBar />
                <ResourcesSelector GetResource={this.GetResource} selectorState={this.state.actionAdd}
                    id={this.state.id} description={this.state.description} url={this.state.url} id_Topics={this.state.topic.id_Topics} />
                <table className="table update text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">DescriptionName</th>
                            <th scope="col">Url</th>
                            <th scope="col">Id Topics</th>
                            <th scope="col">Actions Resources</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.addResouce.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th>{item.id}</th>
                                    <th>{item.description}</th>
                                    <th>{item.url}</th>
                                    <th>{item.topic.id_Topics}-{item.topic.name}</th>
                                    <th>
                                        <div>
                                            <button onClick={() => this.setResource(item.id, item.description, item.url, item.topic.id_Topics)} className="btn btn-info">Edit</button>
                                            <button onClick={() => this.resourceDelete(item.id)} className="btn btn-danger">Delete</button>
                                        </div>
                                    </th>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
const token = localStorage.getItem('Authorization'), Url = "http://localhost:8080/"
const modeAndHeaders = { mode: "cors", headers: { 'Content-Type': 'application/json', 'Authorization': token } }
const   modes = { mode: "cors", headers: { 'Content-Type': 'application/json' } }
export default MyResource