import React from 'react';
import Selector from "./Selector";
import EditResources from './Edit_Resources';

function SelectorId(props) {

    if (props.selectorState === "edit") {

        return <EditResources />
    }
    return (
        <Selector GetTopicId={props.GetTopicId()}> </Selector>
    );
}
export default SelectorId;