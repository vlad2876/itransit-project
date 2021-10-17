import React, {useContext} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Redirect} from "react-router-dom";
import {HOMEPAGE_ROUTE} from "../utils/consts";

const UserData = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    if (user) {
        return (
            <div className="d-flex align-items-center justify-content-start">
                <img className="avatar" src={user.photoURL}/>
                <h3 className="ms-3">{user.displayName}</h3>
            </div>
        );
    } else {
        return <Redirect to={HOMEPAGE_ROUTE}/>
    }
};

export default UserData;