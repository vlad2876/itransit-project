import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {HOMEPAGE_ROUTE, PROFILE_ROUTE} from "../utils/consts";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    console.log(user)
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