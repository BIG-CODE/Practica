import React from 'react';
import '../styles/Home_Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarSesion from "../components/NavBarSesion"

class Home extends React.Component {

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
        this.GetTopic()
    }

    GetResource = () => {
        const requesInfo = {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }
        }
        let context = this
        fetch("http://localhost:8080/resource", requesInfo)
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(res => { context.setState({ addResouce: res }) })
            .catch(error => console.error('Error:', error))
    }

    GetTopic = () => {
        let context = this
        fetch("http://localhost:8080/topic", {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then(res => { context.setState({ addTopics: res }) })
            .catch(error => console.error('Error:', error))
    }

    render() {

        return (
            <div>
                <NavBarSesion />
                <div className="container">
                    <h1 id="top-ten"> Top ten topics </h1>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th id="fila"> Topic </th>
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
        console.log(item)
        return (
            <tr key={index}>
                <th>{item.name}</th>
            </tr>
        );
    })
    return contenido;
}
export default Home;