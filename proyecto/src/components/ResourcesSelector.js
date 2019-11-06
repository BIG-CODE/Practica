import React from 'react';
import AddResources from "./AddResources";
import EditResources from './EditResources';


function ResourcesSelector(props) {

    if (props.selectorState === "edit") {

        return <EditResources />
    }
    return (
        <AddResources GetResource={props.GetResource}>


        </AddResources>

    );


}
export default ResourcesSelector;