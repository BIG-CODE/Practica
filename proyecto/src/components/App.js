import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import Sign_Up from "../pages/Sign_Up.js";
import Log_In from "../pages/Log_In.js";
import Topics from "../pages/MyTopics";
import Resources from "../pages/Resources";
import AddTopics from "../pages/AddTopic";
import EditTopics from "../pages/EditTopic";
import AddResources from "../pages/AddResources";
import EditResources from "../pages/EditResources";



function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/Trainning/Top'} component={Home} />
                <Route exact path={'/Trainning/Sign_Up'} component={Sign_Up} />
                <Route exact path={'/Trainning/Log_In'} component={Log_In} />
                <Route exact path={'/Trainning/topics'} component={Topics} />
                <Route exact path={'/Trainning/resources'} component={Resources} />
                <Route exact path={'/Trainning/newtopics'} component={AddTopics} />
                <Route exact path={'/Trainning/edittopics'} component={EditTopics} />
                <Route exact path={'/Trainning/addresources'} component={AddResources} />
                <Route exact path={'/Trainning/editresources'} component={EditResources} />
               
            </Switch>
        </BrowserRouter>
    );
}
export default App;