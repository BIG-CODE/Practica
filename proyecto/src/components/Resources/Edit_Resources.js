import React from 'react';
import ResourcesSelector from "./ResourcesSelector";
class EditResources extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: "",
            url: "",
            topic: { id_Topics: 0 },
        }
    }
    handleClick = event => {

        const body = { description: this.description, url: this.url, topic: { id_Topics: this.id_Topics } }

        const requestInfo = { method: 'PUT', body: JSON.stringify(body), mode: "cors", headers: { 'Content-Type': 'application/json', } }

        fetch("http://localhost:8080/resource", requestInfo)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    render() {
        return (
            <div className="box-resources">
                <div className="addres">
                    <label id="add-new">Edit new resource</label>
                </div>
                <ResourcesSelector GetResource={this.GetResource} selectorState={this.state.acctionAdd} />
                <form className="form-new">
                    <input
                        onChange={e => this.description = e.target.value}
                        type="text"
                        title="please fill out this field"
                        className="form-control description color"
                        type="text"
                        name="description"
                        placeholder="Description"
                    />
                    <input
                        onChange={e => this.url = e.target.value}
                        type="text"
                        title="please fill out this field"
                        className="form-control url color"
                        type="text "
                        name="url"
                        placeholder="Url"
                    />

                </form>
                <button onClick={this.handleClick}
                    type="button"
                    className="btn btn-primary save-resources">Save</button>
            </div>
        );
    }
}

export default EditResources;