import React from 'react';
import '../styles/My_Resources.css';
import ResourcesSelector from "../components/ResourcesSelector";
import NavBar from "../components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
class Resource extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            addResouce: [

            ],
            description: "",
            url: "",
            topic: {
                id_Topics: 0
            },
        }
    }
    componentDidMount() {
        this.GetResource()
        this.handleDelete()
    }
    handleClick = event => {
        const body = {
            description: this.state.description,
            url: this.state.url,
            topic: {
                id_topics: this.state.id_topics
            }
        }

        fetch("http://localhost:8080/resource", {
            method: 'POST',
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });

    };
    GetResource = () => {
        let context = this
        fetch("http://localhost:8080/resource", {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json())
            .then(res => {
                context.setState({
                    addResouce: res
                })
            })
            .catch(error => console.error('Error:', error))

    }
    handleUpdate = event => {
        const body = {
            description: this.state.description,
            url: this.state.url,
            topic: {
                id_Topics: this.state.id_Topics
            }
        }

        fetch("http://localhost:8080/resource", {
            method: 'PUT',
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

    }
    handleDelete = (id) => {
        const body = {
            description: this.state.description,
            url: this.state.url,
            topic: {
                id_Topics: this.state.id_Topics
            }
        }

        fetch("http://localhost:8080/resource/"+id, {
            method: 'DELETE',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    render() {
        return (
            <div className="box-resources">
                <NavBar />
                <ResourcesSelector GetResource={this.GetResource} selectorState={"add"} />
                <table className="table update">
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
                <th>{item.topic.id_Topics}</th>
                <th>
                    <div>
                        <button className="btn btn-info">Edit</button>
                        <button onClick={props.handleDelete(item.id)} className="btn btn-danger">Delete</button>
                    </div>
                </th>
            </tr>
        );
    })

    return contenido;
}

export default Resource