import React from 'react';
import '../styles/Insert_Topics.css';
import TopicSelector from "../components/TopicSelector"
import NavBar from "../components/NavBar"
class Topic extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            addTopics: [
            ]
        }

    }
    componentDidMount() {
        this.GetTopic()
        this.handleDelete()
    }

    GetTopic = () => {
        let context = this
        fetch("http://localhost:8080/topic", {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSb3luZXIiLCJpYXQiOjE1NzQxODUzODQsImV4cCI6MTU3NTA0OTM4NH0.wle2URKZxaOjnmdrCKgRNXgdQvG1FtGg7nJ_2n3chbTTPg8-3TpOkdLG9AvmaCYojBjgkG_HNYE9t64Vmxo7Vg'
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

    handleDelete = async(id) => {
        const requestInfo = {
            method: 'DELETE',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSb3luZXIiLCJpYXQiOjE1NzQxODUzODQsImV4cCI6MTU3NTA0OTM4NH0.wle2URKZxaOjnmdrCKgRNXgdQvG1FtGg7nJ_2n3chbTTPg8-3TpOkdLG9AvmaCYojBjgkG_HNYE9t64Vmxo7Vg'
            }
        }

       await fetch("http://localhost:8080/topic/" + id, requestInfo)
        .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    render() {
        return (
            <div className="top">
                <NavBar />
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
                        <Tabla data={this.state.addTopics} handleDelete={this.handleDelete} />
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
                        <button onClick={() => props.handleDelete(item.id_Topics)} className="btn btn-danger delete">Delete</button>
                    </div>
                </th>
            </tr>
        );
    })
    console.log(props.data)
    return contenido;
}
export default Topic