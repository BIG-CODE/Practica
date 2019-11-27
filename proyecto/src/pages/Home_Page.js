import React from 'react';
import '../styles/Home_Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSelector from "./HomeSelector"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { addResouce: [], addTopics: [], navBar: props.navBar }
    }

    componentDidMount() {
        this.GetTopic()
        this.GetResource()
    }

    GetResource = () => {
        let context = this
        const requesInfo = { method: 'GET', ...modes }
        fetch(Url + "resource", requesInfo)
            .then(res => { return res.json() })
            .then(res => { context.setState({ addResouce: res }) })
            .catch(error => console.error('Error:', error))
    }

    GetTopic = () => {
        let context = this
        const requesInfo = { method: 'GET', ...modes }
        fetch(Url + "topic", requesInfo)
            .then(res => res.json())
            .then(res => { context.setState({ addTopics: res }) })
            .catch(error => console.error('Error:', error))
    }

    render() {

        return (
            <div>
                 <NavSelector selectorState={this.state.navBar} />
                <div className="container">
                    <h1 id="top-ten"> Top ten topics </h1>
                    <table className="table table-striped table-hover text-center">
                        <thead>
                            <tr>
                                <th> Topic </th>
                                <th>Resources</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TablaHome data={this.state.addTopics} />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function TablaHome(props) {
    let data = props.data
    let contenido = data.map((item, index) => {
        return (
            <tr key={index}>
                <th>{item.name}</th>
            </tr>
        );
    })
    return contenido;
}
const Url = "http://localhost:8080/", modes = { mode: "cors", headers: { 'Content-Type': 'application/json' } }
export default Home;