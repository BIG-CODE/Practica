import React from 'react';
import '../styles/Insert_Topics.css';
import TopicSelector from "../components/Topics/TopicSelector"
import NavBar from "../components/NavBar"
class Topic extends React.Component {
    constructor(props) {
        super(props)
        this.state = { id_Topics: 0, name: "", addTopics: [], actionAdd: false }
    }

    componentDidMount() { this.GetTopic() }

    GetTopic = async () => {
        let context = this
        const requestInfo = { method: 'GET', modes }
        await fetch(Url + "topic", requestInfo)
            .then(res => res.json())
            .then(res => { context.setState({ addTopics: res }) })
            .catch(error => console.error('Error:', error))
    }

    deleteTopic = async (id) => {
        const requestInfo = { method: 'DELETE', ...modeAndHeaders }
        await fetch(Url + "topic/" + id, requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
        this.GetTopic()
    }

    updateTopic = (id_Topics, name) => {
        this.setState({ actionAdd: true, id_Topics: id_Topics, name: name })
    }
    render() {
        return (
            <div className="top">
                <NavBar />
                <TopicSelector GetTopic={this.GetTopic} selectorState={this.state.actionAdd} name={this.state.name} id_Topics={this.state.id_Topics} />
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
const Url = "http://localhost:8080/", token = localStorage.getItem('Authorization')
const modes = { mode: "cors", headers: { 'Content-Type': 'application/json' } }
const modeAndHeaders = { mode: "cors", headers: { 'Content-Type': 'application/json', 'Authorization': token } }
export default Topic