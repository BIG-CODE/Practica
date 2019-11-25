import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topic from '../../pages/My_Topics';
class EditTopic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id_Topics: props.id_Topics,
            name: ""
        }
    }

    handleUpdate = async (props) => {
        const id = localStorage.getItem("topic")
        const body = { id_Topics: parseInt(id), name: this.state.name }
        console.log(body)
        /*let token = localStorage.getItem('Authorization')
          const requestInfo = {
              method: 'PUT',
              body: JSON.stringify(body),
              mode: "cors",
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization": token
              }
          }
  
          await fetch("http://localhost:8080/topic", requestInfo)
              .then(res => res.json())
              .catch(error => console.error('Error:', error))
          this.props.GetTopic()*/
    }
    handleChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.name !== prevState.name) return nextProps
        return null
    }

    componentDidUpdate(prevState) {
        if (prevState.name !== this.props.name) {
            console.log(this.props.name)
            this.setState({
                name: this.props.name
            })

        }

    }
    render() {
        return (
            <div>
                <div>
                    <h1 id="add-topic">Edit Topic</h1>
                    <h5 id="name">Name:</h5>
                </div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}
                    type="text"
                    title="please fill out this field"
                    className="form-control control color"
                    placeholder="Topic Name"
                    name="name" />
                <button
                    onClick={this.handleUpdate}
                    className=" btn btn-primary"
                    id="save-btn">Save</button>
            </div>
        );
    }
}

export default EditTopic;