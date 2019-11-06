import React from 'react';
import SelectorId from "../components/SelectorId";
import { Link } from 'react-router-dom'
import Topic from '../pages/Topic';
class AddResources extends React.Component {
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
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });

    };
    render() {
        return (
            <div className="res">
                <div className="addres"><label id="add-new">Add new resource</label> </div>

                <form className="form-new">
                    <input value={this.state.description}
                        onChange={this.handleChange}
                        required type="text" title="please fill out this field"
                        className="form-control description color" type="text"
                        name="description" placeholder="Description"
                    />
                    <input value={this.state.url}
                        onChange={this.handleChange}
                        required type="text" title="please fill out this field"
                        className="form-control url color" type="text " name="url" placeholder="Url"
                    />

                    <select value={this.state.topic.id_Topics}
                        onChange={this.handleChange}
                        required type="text" title="please fill out this field" name="id_Topics" className="form-control description dropdown color ">
                        <option >2</option>
                        <option >5</option>
                        <option >1</option>
                        <option >6</option>

                    </select>
                </form>

                <button onClick={this.handleClick}
                    type="button" className="f btn btn-primary">Save</button>
                <Link to="/Trainning/resources" className="btn-back">Back to list</Link>
            </div>
        );
    }
}


export default AddResources;