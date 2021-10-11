import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {HOMEPAGE_ROUTE, PROFILE_ROUTE} from "../utils/consts";


const AppRouter = () => {
    const user = true
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={PROFILE_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={HOMEPAGE_ROUTE}/>
            </Switch>
        )
};

export default AppRouter;