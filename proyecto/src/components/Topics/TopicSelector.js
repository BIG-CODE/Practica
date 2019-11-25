import React from 'react';
import AddTopic from "./Insert_Topics";
import EditTopic from './Edit_Topics';

function TopicSelector(props) {

    if (props.selectorState === true) {

        return <EditTopic GetTopic={props.GetTopic} id_Topics={props.id_Topics} name={props.name} />

    }
    return (
        <AddTopic GetTopic={props.GetTopic}  >
        </AddTopic>

    );
}
export default TopicSelector;