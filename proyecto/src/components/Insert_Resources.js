import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Insert_Resources extends React.Component {
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
    componentDidMount() {
        this.GetTopicId()
    }
    handleClick = (event) => {
        const body = {
            description: this.state.description,
            url: this.state.url,
            topic: {
                id_Topics: this.state.id_Topics
            },
        }
        console.log(body)
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
    GetTopicId = () => {
        let context = this
        fetch("http://localhost:8080/topic", {
            method: 'GET',
            body: JSON.stringify(),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json())
            .then(res => {
                context.setState({
                    addId: res
                })
            })
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
    setId(id_Topics) {
        console.log(id_Topics)
        this.setState({
            topic: {
                id_Topics: id_Topics
            }
        });
    }
    render() {
        return (
            <div className="box-resources">

                <h1 id="add-new">Add new resource</h1>

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
                    <select name="id_Topics"
                        value={this.state.topic.id_Topics}
                        onChange={(event) => this.setId(event.target.value)}
                        onClick={this.handleChange}
                        id="inputState"
                        className="form-control url color">
                        {
                            this.state.addId.map((item, index) => {
                                return <option key={index} >{item.id_Topics}</option>
                            })
                        }

                    </select>
                </form>
                <button onClick={this.handleClick}
                    type="button" className="save-resources btn btn-primary">Save</button>

            </div>
        );
    }
}
export default Insert_Resources;