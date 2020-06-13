import {Switch, Route} from React;
import React  from 'react';

function Routes(){
    return(
        <Switch>
            <Route path="/" render={()=><div>HOME</div>}/>
            <Route path="/" render={()=><div>HOME</div>}/>
            <Route path="/" render={()=><div>HOME</div>}/>
        </Switch>
    )
}

export default Routes;