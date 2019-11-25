import React from 'react';
import '../styles/Insert_Topics.css';
import TopicSelector from "../components/Topics/TopicSelector"
import NavBar from "../components/NavBar"
class Topic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            addTopics: [
            ],
            actionAdd: false,
            cachedSomeProp: null
        }
    }

    componentDidMount() {
        this.GetTopic()
    }

    GetTopic = async () => {
        let token = localStorage.getItem('Authorization')
        let context = this
        const requestInfo = {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        await fetch("http://localhost:8080/topic", requestInfo)
            .then(res => res.json())
            .then(res => { context.setState({ addTopics: res }) })
            .catch(error => console.error('Error:', error))
    }

    deleteTopic = async (id) => {
        let token = localStorage.getItem('Authorization')
        const requestInfo = {
            method: 'DELETE',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }

        await fetch("http://localhost:8080/topic/" + id, requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.error('ok:', response));
        this.GetTopic()
    }

    updateTopic = (id_Topics, name) => {
        localStorage.setItem("topic", id_Topics)
        console.log(this.state.id_Topics, this.state.name)
        console.log(id_Topics, name)
        this.setState({
            actionAdd: true,
            name: name
        })
    }
    render() {
        return (
            <div className="top">
                <NavBar />
                <TopicSelector GetTopic={this.GetTopic} selectorState={this.state.actionAdd} name={this.state.name} />
                <table className="table updates text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions Topic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.addTopics.map((item, index) => {
                            console.log(item)
                            return (
                                <tr key={index}>
                                    <th>{item.id_Topics}</th>
                                    <th>{item.name}</th>
                                    <th>
                                        <div>
                                            <button onClick={() => this.updateTopic(item.id_Topics, item.name)} className="btn btn-info edit">Edit</button>
                                            <button onClick={() => this.deleteTopic(item.id_Topics)} className="btn btn-danger delete">Delete</button>
                                        </div>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Topic