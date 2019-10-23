import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Sign_Up from "../pages/Sign_Up.js";
import Log_In from "../pages/Log_In.js";

//Para que el componente Home te aparezca en la ruta: /
//Simplemente duplique el componente pero con diferente ruta
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/Trainning/Top'} component={Home} />
                <Route exact path={'/Trainning/Sign_Up'} component={Sign_Up} />
                <Route exact path={'/Trainning/Log_In'} component={Log_In} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;