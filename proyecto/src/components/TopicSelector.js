import React from 'react';
import AddTopic from "./AddTopic";
import EditTopic from './EditTopic';

function TopicSelector(props) {

    if (props.selectorState === "edit") {

        return <EditTopic />
    }
    return (
        <AddTopic GetTopic={props.GetTopic}>


        </AddTopic>

    );


}
export default TopicSelector;