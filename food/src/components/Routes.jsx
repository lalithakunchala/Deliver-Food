import {Switch, Route} from 'react-router-dom';
import React  from 'react';
import Login from './Login';
import Order from './Order';
import User from './User';
import Restaurant from './Restaurant';
import Specific from './Specific';
import Items from './Items';

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={User}/>
            <Route path="/login" component={Login}/>
            <Route path="/restaurant"  component={Restaurant}/>
            <Route path="/order" component={Order}/>
            <Route path ="/specific"  component={Specific}/>
            <Route path ="/items"  component={Items}/>
        </Switch>
    )
}

export default Routes;