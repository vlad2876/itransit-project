import React, {useContext} from 'react';
import {Table} from "react-bootstrap";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Redirect} from "react-router-dom";
import {HOMEPAGE_ROUTE} from "../utils/consts";

const Profile = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    if (user) {
        return (
            <div>
                <div className="d-flex align-items-center justify-content-start">
                    <img className="avatar" src={user.photoURL}/>
                    <h1 className="ms-3">{user.displayName}</h1>
                </div>
                <Table striped bordered hover className="w-50 mt-4">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Theme</th>
                        <th>Title</th>
                        <th>Task</th>
                        <th>Tags</th>
                        <th>Answer 1</th>
                        <th>Answer 2</th>
                        <th>Answer 3</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    </tbody>
                </Table>
            </div>

        );
    } else {
        return (
            <Redirect to={HOMEPAGE_ROUTE}/>
        )
    }
};

export default Profile;