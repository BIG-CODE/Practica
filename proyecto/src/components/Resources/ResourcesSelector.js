import React from 'react';
import AddResources from "./Insert_Resources";
import EditResources from './Edit_Resources';
function ResourcesSelector(props) {

    if (props.selectorState === true) {

        return <EditResources />

    }
    return (<AddResources GetResource={props.GetResource} />);
}

export default ResourcesSelector;