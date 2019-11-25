import React from 'react';
import '../styles/My_Resources.css';
import ResourcesSelector from "../components/Resources/ResourcesSelector";
import NavBar from "../components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
class MyResource extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: "",
            url: "",
            topic: { id_Topics: 0 },
            addResouce: [],
            addTopics: [],
            actionAdd: false
        }
    }

    componentDidMount() {
        this.GetResource()
    }

    GetResource = async () => {
        let context = this

        const requestInfo = { method: 'GET', mode: "cors", headers: { 'Content-Type': 'application/json', } }

        await fetch(Url + "resource", requestInfo)
            .then(res => res.json())
            .then(res => { context.setState({ addResouce: res }) })
            .catch(error => console.error('Error:', error))
    }

    resourceUpdate = async () => {
        const body = { description: this.description, url: this.url, topic: { id_Topics: this.id_Topics } }

        const requestInfo = { method: 'PUT', body: JSON.stringify(body), mode: "cors", headers: { 'Content-Type': 'application/json', "Authorization": token } }

        await fetch(Url, requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
        this.GetResource()
    }

    resourceDelete = async (id) => {
        const requestInfo = { method: 'DELETE', mode: "cors", headers: { 'Content-Type': 'application/json', "Authorization": token } }

        await fetch(Url + "resource/" + id, requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
        this.GetResource()
    }
    updateResource = (id, description, url, id_Topics) => {
        console.log(id, description, url, id_Topics)
        /* this.setState({
             actionAdd: true,
             id: id, description: description, url: url, topic:{id_Topics: id_Topics}
         })*/
    }
    render() {
        return (
            <div className="box-resources">
                <NavBar />
                <ResourcesSelector GetResource={this.GetResource} selectorState={this.state.actionAdd} />
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
                            console.log(item)
                            return (
                                <tr key={index}>
                                    <th>{item.id}</th>
                                    <th>{item.description}</th>
                                    <th>{item.url}</th>
                                    <th>{item.topic.id_Topics}- {item.topic.name}</th>
                                    <th>
                                        <div>
                                            <button onClick={() => this.updateResource(item.id, item.description, item.url, item.topic.id_Topics)} className="btn btn-info">Edit</button>
                                            <button onClick={() => this.resourceDelete(item.id)} className="btn btn-danger">Delete</button>
                                        </div>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
const token = localStorage.getItem('Authorization')
const Url = "http://localhost:8080/"
export default MyResource