import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home_Page";
import Sign_Up from "../pages/Sign_Up.js";
import Log_In from "../pages/Log_In.js";
import Topic from "../pages/My_Topics";
import Resource from "../pages/My_Resources";
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/Training/Top'} component={Home} />
                <Route exact path={'/Training/Log_In'} component={Log_In} />
                <Route exact path={'/Training/Sign_Up'} component={Sign_Up} />
                <Route exact path={'/Training/My_Topics'} component={Topic} />
                <Route exact path={'/Training/My_Resources'} component={Resource} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;