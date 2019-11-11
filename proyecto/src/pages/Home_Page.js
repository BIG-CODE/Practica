import React from 'react';
import '../styles/Home_Page.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            topic: {
                name: ""
            },
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
            <div className="container">
              <div className="table table-bordered" id="forma" >
                <Link id="avantica" to="/Trainning/Top"  >Avantica Trainning</Link>
                <Link className="top-log" to="/Trainning/Log_In" >Log in</Link>
                <Link id="logout" to="/Trainning/Sign_Up" >Sign up</Link>
            </div>
                <div className='container'>
                    <p id="top-ten"> Top ten topics </p>
                    <table className="table table-striped">
                        <thead>
                            <tr> <th id="fila"> Topic </th>
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
    console.log(props.data)
    return contenido;
}
export default Home;