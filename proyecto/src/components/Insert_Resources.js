import React from 'react';
import Selector from "./Selector"
import 'bootstrap/dist/css/bootstrap.min.css';
class AddResources extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            description: "",
            url: "",
            topic: {
                id_Topics: 0,
            },
            addId: [

            ]

        }
    }

    handleClick = async (event) => {
        const body = {
            description: this.state.description,
            url: this.state.url,
            topic: {
                id_Topics: this.state.id_Topics
            },
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
        console.log(this.state.id_Topics)
    }
    imprimir = () => {
        console.log(this.state)
    }
    render() {
        return (
            <div className="box-resources">
                <div className="addres"><label id="add-new">Add new resource</label> </div>

                <form className="form-resources">
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
                    <Selector value={this.state.topic.id_Topics}
                        onChange={(event) => { this.setId(event.target.value, "id_Topics") }} />
                </form>
                <button onClick={this.imprimir}
                    type="button" className="save-resources btn btn-primary">Save</button>
               
            </div>
        );
    }
}
export default AddResources;