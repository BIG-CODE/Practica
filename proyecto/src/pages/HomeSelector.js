import React from 'react';
import NavBar from '../components/NavBar'
import NavBarSesion from '../components/NavBarSesion'
//import Home from './Home_Page';

function NavSelector(props) {

    if (props.selectorState === true) {
        return <NavBar navBar={props.navBar} />
    }
    return (<NavBarSesion navBar={props.navBar} />);
}
export default NavSelector;

