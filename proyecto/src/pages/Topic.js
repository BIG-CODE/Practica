import React from 'react';
import './AddTopic.css';
import { Link } from 'react-router-dom'
import TopicSelector from "../components/TopicSelector"

class Topic extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            addTopics: [
            ]
        }

    }
    componentDidMount() {
        this.GetTopic()
    }
    handleClick = event => {
        const body = {
            name: this.state.name,
        }

        fetch("http://localhost:8080/topic", {
            method: 'POST',
            body: JSON.stringify(body),
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

    GetTopic = () => {
        let context = this
        fetch("http://localhost:8080/topic", {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json())
            .then(res => {
                context.setState({
                    addTopics: res
                })
            })
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

    }
    
    render() {
        return (
            <div className="top">
                <div className="table table-bordered" id="formas" >
                    <Link id="avantica" to="/Trainning/Top"  >Avantica Trainning</Link>
                    <Link id="topics" to="/Trainning/topics" >Topics</Link>
                    <Link to="/Trainning/resources" id="resources">Resources</Link>
                    <Link to="" id="logout" >Log out</Link>
                </div>
                <TopicSelector GetTopic={this.GetTopic} selectorState={"add"} />
                <table className="table updates">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions Topic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tabla data={this.state.addTopics} />
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
                <th>{item.id_Topics}</th>
                <th>{item.name}</th>
                <th>
                    <div>
                        <button className="btn btn-info edit">Edit</button>
                        <button className="btn btn-danger delete">Delete</button>
                    </div>
                </th>

            </tr>
        );
    })
    console.log(props.data)
    return contenido;
}
export default Topic