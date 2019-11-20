import React from 'react';
import AddResources from "./Insert_Resources";
function ResourcesSelector(props) {

    if (props.selectorState === "add") {

        return <AddResources />
    }

    return (
        <AddResources GetResource={props.GetResource}>


        </AddResources>

    );


}

export default ResourcesSelector;