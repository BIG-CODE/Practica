import React from 'react';
import '../styles/alert.css'
class Alert_Success extends React.Component {
    render() {
        return (
            <div className="alert alert-success text-center">
                <strong>Success! </strong>was inserted conrrectly.
            </div>
        );
    }
}
export default Alert_Success;