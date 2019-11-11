import React from 'react';
import AddTopic from "./Insert_Topics";
import EditTopic from './Edit_Topics';

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