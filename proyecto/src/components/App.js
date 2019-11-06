import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Sign_Up from "../pages/Sign_Up.js";
import Log_In from "../pages/Log_In.js";
import Topics from "../pages/MyTopics";
import MyResources from "../pages/MyResources";
import Topic from "../pages/Topic";
import Resource from "../pages/Resource";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/Trainning/Top'} component={Home} />
                <Route exact path={'/Trainning/Sign_Up'} component={Sign_Up} />
                <Route exact path={'/Trainning/Log_In'} component={Log_In} />
                <Route exact path={'/Trainning/topics'} component={Topics} />
                <Route exact path={'/Trainning/resources'} component={MyResources} />
                <Route exact path={'/Trainning/newtopics'} component={Topic} />
                <Route exact path={'/Trainning/addresources'} component={Resource} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;