import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Insert_Resources extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            addId: [

            ]
        }
    }

    componentDidMount() {
        this.GetTopicId()
    }

    handleClick = async (event) => {

        const body = { description: this.description, url: this.url, topic: { id_Topics: this.id_Topics } }
       //let token = localStorage.getItem('Authorization')
        console.log(body)
        const requesInfo = {
            method: 'POST',
            body: JSON.stringify(body),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSb3lPbSIsImlhdCI6MTU3NDM3MDMyMCwiZXhwIjoxNTc1MjM0MzIwfQ.WBnFZJf4bKSVVDUaYDXc6znribygN__bQOcvHp5-fLGy7wSLMkLEf6ttmkLFOQ7nJvigrwDgbH1a2xGyJMb16Q"

            }
        }

        console.log(body)
        await fetch("http://localhost:8080/resource", requesInfo)
            .then(res => res.json())
            .then(response => console.log('Success:', response))
            .catch(error => console.error('Error:', error))
        this.props.GetResource()
    }

    GetTopicId = async () => {
        let token = localStorage.getItem('Authorization')
        const requesInfo = {
            method: 'GET',
            body: JSON.stringify(),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                token
            }
        }

        let context = this
        await fetch("http://localhost:8080/topic", requesInfo)
            .then(res => res.json())
            .then(res => { context.setState({ addId: res }) })
            .catch(error => console.error('Error:', error))
    }

    render() {
        return (
            <div className="box-resources">

                <h1 id="add-new">Add new resource</h1>

                <form className="form-resources">
                    <input
                        onChange={e => this.description = e.target.value}
                        required type="text" title="please fill out this field"
                        className="form-control description color" type="text"
                        name="description" placeholder="Description" />

                    <input
                        onChange={e => this.url = e.target.value}
                        required type="text" title="please fill out this field"
                        className="form-control url color" type="text " name="url" placeholder="Url" />

                    <select
                        name="id_Topics"
                        onChange={e => this.id_Topics = e.target.value}
                        id="inputState"
                        className="form-control url color">

                        {this.state.addId.map((item, index) => { return <option key={index} >{item.id_Topics}</option> })}

                    </select>
                </form>
                <button onClick={this.handleClick}
                    type="button" className="save-resources btn btn-primary">Save</button>
            </div>
        );
    }
}
export default Insert_Resources;