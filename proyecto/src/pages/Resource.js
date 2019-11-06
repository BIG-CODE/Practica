import React from 'react';
import './AddTopic.css';
import { Link } from 'react-router-dom'
import ResourcesSelector from "../components/ResourcesSelector";

class Resource extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            description: "",
            url: "",
            topic: {
                id_Topics: 0
            },
            addResouce: [

            ]
        }
    }
    componentDidMount() {
        this.GetResource()
    }
    handleClick = event => {
        const body = {
            description: this.state.description,
            url: this.state.url,
            topic: {
                id_Topics: this.state.id_Topics
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
            .then(response => console.log('Success:', response));

    }
    render() {
        return (
            <div className="res">
                <div className="table table-bordered" id="formas" >
                    <Link id="avantica" to="/Trainning/Top"  >Avantica Trainning</Link>
                    <Link id="topics" to="/Trainning/topics" >Topics</Link>
                    <Link to="/Trainning/resources" id="resources">Resources</Link>
                    <Link to="/Trainning/Top" id="logout" >Log out</Link>
                </div>
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
                        <Tabla data={this.state.addResouce} />
                    </tbody>
                </table>
            </div>
        );
    }
}
function Tabla(props) {
    let data = props.data
    let contenido = data.map((item, index) => {
        console.log(item)

        return (
            <tr key={index}>
                <th>{item.id}</th>
                <th>{item.description}</th>
                <th>{item.url}</th>
                <th>{item.topic.id_Topics}</th>
                <th>
                    <div>
                        <button className="btn btn-info">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </th>
            </tr>
        );
    })
    console.log(props.data)
    return contenido;
}

export default Resource