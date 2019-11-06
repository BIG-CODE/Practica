import React from 'react';
import SelectorId from "../components/SelectorId";
import { Link } from 'react-router-dom'
class Selector extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            description: "",
            url: "",
            topic: {
                id_Topics: 0
            },

        }
    }
    handleClick = async (event) => {
        const body = {
            description: this.state.description,
            url: this.state.url,
            topic: {
                id_Topics: this.state.id_Topics
            }
        }

        await fetch("http://localhost:8080/resource", {
            method: 'POST',
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        this.props.GetResource()
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });

    };
    GetTopicId = () => {
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
                    id_Topics: res
                })
            })
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }
    render() {
        return (
            <div className="res">
                <div className="addres"><label id="add-new">Add new resource</label> </div>
                <form className="form-new">
                    <select value={this.state.id_Topics}
                        onChange={this.handleChange}
                        required type="text" title="please fill out this field" name="id_Topics" className="form-control description dropdown color ">
                        <option></option>
                        <option></option>
                    </select>
                </form>
            </div>
        );
    }
}
function TextBox(props) {
    let data = props.data
    let contenido = data.map((item, index) => {
        console.log(item)

        return (
            <option>{item.topic.id_Topics}</option>
        );
    })
    console.log(props.data)
    return contenido;
}

export default Selector;