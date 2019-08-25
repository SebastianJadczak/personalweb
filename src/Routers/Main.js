import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from "../Pages/Home";
import Tools from "../Pages/Tools";
import Contact from "../Pages/Contact";
import MyAccount from "../Pages/MyAccount";
import Tasks from "../Pages/Tasks";
import Promotion from "../Pages/Promotion";
import ErrorPage from "../Pages/ErrorPage";
import Table from "../Pages/Table"

const Main = () => {
    return (
        <Switch>

            <Route path="/" exact component={Home} />;
            <Route path="/tools" component={Tools} />;
            <Route path="/contact" component={Contact} />;
            <Route path="/myaccount" component={MyAccount} />;
            <Route path="/tasks" component={Tasks} />
            <Route path="/promotion" component={Promotion} />
            <Route path="/table" component={Table} />
            <Route component={ErrorPage} />
        </Switch>
    )
}
export default Main;