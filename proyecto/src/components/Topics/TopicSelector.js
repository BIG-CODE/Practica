import React from 'react';
import AddTopic from "./Insert_Topics";
import EditTopic from './Edit_Topics';

function TopicSelector(props) {

    if (props.selectorState == true) {

        return <EditTopic name={props.name} GetTopic={props.GetTopic} />

    }
    return (
        <AddTopic GetTopic={props.GetTopic}  >
        </AddTopic>

    );
}
export default TopicSelector;