import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home_Page";
import Sign_Up from "../pages/Sign_Up.js";
import Log_In from "../pages/Log_In.js";

import Topic from "../pages/My_Topics";
import Resource from "../pages/My_Resources";
import AddTopic from "./Insert_Topics"
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/Trainning/Top'} component={Home} />
                <Route exact path={'/Trainning/Sign_Up'} component={Sign_Up} />
                <Route exact path={'/Trainning/Log_In'} component={Log_In} />
                <Route exact path={'/Trainning/My_Topics'} component={Topic} />
                <Route exact path={'/Trainning/My_Resources'} component={Resource} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;