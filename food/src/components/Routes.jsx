import {Switch, Route} from 'react-router-dom';
import React  from 'react';
import store from '../redux/store'
import Login from './Login';
import Order from './Order';
import User from './User';
import Restaurant from './Restaurant';
import Specific from './Specific';
import Items from './Items';

function Routes(){
    const {auth,isAdmin} = store.getState();
    console.log(auth);
    return(
        <Switch>
            <Route path="/" exact component={User}/>
            <Route path="/login" component={Login}/>
            <Route path="/restaurant"  component={Restaurant}/>
            <Route path="/order" component={Order}/>
            {auth?<Route path ="/specific"  component={Specific}/>:<Login/>}
            {auth?<Route path ="/items"  component={Items}/>:<Login/>}
        </Switch>
    )
}

export default Routes;