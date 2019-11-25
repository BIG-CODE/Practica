import React from 'react';
import '../styles/My_Resources.css';
import ResourcesSelector from "../components/Resources/ResourcesSelector";
import NavBar from "../components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
class MyResource extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            addResouce: [
            ],
            addTopics: [
            ]
        }
    }

    componentDidMount() {
        this.GetResource()
    }

    GetResource = async () => {
        let context = this

        const requestInfo = {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }
        }

        await fetch("http://localhost:8080/resource", requestInfo)
            .then(res => res.json())
            .then(res => { context.setState({ addResouce: res }) })
            .catch(error => console.error('Error:', error))
    }

    handleUpdate = async (event) => {
        let token = localStorage.getItem('Authorization')
        const body = { description: this.description, url: this.url, topic: { id_Topics: this.id_Topics } }
        const requestInfo = {
            method: 'PUT',
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        await fetch("http://localhost:8080/resource", requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        this.GetResource()
    }

    handleDelete = async (id) => {
        let token = localStorage.getItem('Authorization')
        const requestInfo = {
            method: 'DELETE',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token

            }
        }
        await fetch("http://localhost:8080/resource/" + id, requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        this.GetResource()
    }

    render() {
        return (
            <div className="box-resources">
                <NavBar />
                <ResourcesSelector GetResource={this.GetResource} selectorState={"add"} />
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
                        <Tabla data={this.state.addResouce} handleDelete={this.handleDelete} />
                    </tbody>
                </table>
            </div>
        );
    }
}
function Tabla(props) {
    let data = props.data
    let contenido = data.map((item, index) => {
        return (
            <tr key={index}>
                <th>{item.id}</th>
                <th>{item.description}</th>
                <th>{item.url}</th>
                <th>{item.topic.id_Topics}- {item.topic.name}</th>
                <th>
                    <div>
                        <button className="btn btn-info">Edit</button>
                        <button onClick={() => props.handleDelete(item.id)} className="btn btn-danger">Delete</button>
                    </div>
                </th>
            </tr>
        );
    })

    return contenido;
}
export default MyResource