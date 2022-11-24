import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routesAdmin from './routes.admin';
import { map } from 'lodash';

console.log(routesAdmin);
export function Navigation() {
  return (
<Router>
    <Switch>
       {map(routesAdmin, (route, index) => (
        <Route
        key={index}
        path={route.path}
        exact={route.exact}
        render={(props) => (
            <route.layout>
                <route.component {...props} />
            </route.layout>
        )}
        />
       ))}
    </Switch>
</Router>
    )
}

 