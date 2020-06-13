import {Switch, Route} from 'react-router-dom';
import React  from 'react';
import Login from './Login';
import Home from './Home';
import Restaurant from './Restaurant';

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/restaurant" component={Restaurant}/>
        </Switch>
    )
}

export default Routes;