import React from 'react';
import { Link } from 'react-router-dom'
import SelectorId from "./SelectorId";
import ResourcesSelector from "./ResourcesSelector";
class EditResources extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            description: "",
            url: "",
            topic: {
                id_Topics: 0,

            }
        }
    }
    handleClick = event => {
        const body = {
            description: this.state.description,
            url: this.state.url,
            topic: {
                id_Topics: this.state.id_Topics
            }
        }

        fetch("http://localhost:8080/resource", {
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
            <div className="box-resources">
                <div className="addres"><label id="add-new">Edit new resource</label> </div>
                <ResourcesSelector GetResource={this.GetResource} selectorState={"edit"} />
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

                </form>
                <button onClick={this.handleClick}
                    type="button" className="btn btn-primary save-resources">Save</button>
               
            </div>
        );
    }
}

export default EditResources;