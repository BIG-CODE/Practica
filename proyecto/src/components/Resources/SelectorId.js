import React from 'react';
import Selector from "./Selector";
import EditResources from './Edit_Resources';

function SelectorId(props) {

    if (props.selectorState === true) {

        return <EditResources GetTopicId={props.GetTopicId} />
    }
    return (  <Selector GetTopicId={props.GetTopicId}/>)
}
export default SelectorId;