import React, {useContext} from 'react';
import {Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
            </Switch>
        )
};

export default AppRouter;