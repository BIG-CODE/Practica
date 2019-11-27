import React from 'react';
import AddResources from "./Insert_Resources";
import EditResources from './Edit_Resources';

function ResourcesSelector(props) {

    if (props.selectorState === true) {
        return <EditResources GetResource={props.GetResource} selectorState={props.actionAdd} id={props.id} description={props.description} url={props.url} id_Topics={props.id_Topics} />
    }
    return (<AddResources GetResource={props.GetResource} />);
}
export default ResourcesSelector;