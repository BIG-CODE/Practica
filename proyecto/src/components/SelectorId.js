import React from 'react';
import AddResources from "./AddResources";
import EditResources from './EditResources';

function SelectorId(props) {

    if (props.selectorState === "add") {

        return <EditResources />
    }
    return (
        <AddResources GetTopicId={props.GetTopicId}> </AddResources>
    );
}
export default SelectorId;