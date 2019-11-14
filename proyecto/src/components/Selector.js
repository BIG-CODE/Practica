import React from 'react';
class Selector extends React.Component {
   

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <div></div>

        );
    }
}

export default Selector;