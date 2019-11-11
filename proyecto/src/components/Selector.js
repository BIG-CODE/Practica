import React from 'react';
class Selector extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            topic: {
                id_Topics: 0
            },
            addId: [

            ]
        }
    }
    componentDidMount() {
        this.GetTopicId()
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
                    addId: res
                })
            })
            .catch(error => console.error('Error:', error))
    }

    setId(id_Topics) {
        console.log(id_Topics)
        this.setState({
            id_Topics: id_Topics
        });

    }
    render() {
        return (

            <select name="id_Topics"
                value={this.state.topic.id_Topics}
                onChange={(event) => { this.setId(event.target.value, "id_Topics") }}
                id="inputState"
                className="form-control url">
                {
                    this.state.addId.map((item, index) => {
                        return <option key={index} value={this.state.topic.id_Topics}>{item.id_Topics}</option>
                    })
                }

            </select>
        );
    }
}

export default Selector;