import React, {useContext} from 'react';
import {Table} from "react-bootstrap";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Redirect} from "react-router-dom";
import {HOMEPAGE_ROUTE} from "../utils/consts";
import {Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";

const Profile = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    if (user) {
        return (
            <div>
                <div className="d-flex align-items-center justify-content-start">
                    <img className="avatar" src={user.photoURL}/>
                    <h3 className="ms-3">{user.displayName}</h3>
                </div>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Event</Th>
                            <Th>Date</Th>
                            <Th>Location</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Tablescon</Td>
                            <Td>9 April 2019</Td>
                            <Td>East Annex</Td>
                        </Tr>
                        <Tr>
                            <Td>Capstone Data</Td>
                            <Td>19 May 2019</Td>
                            <Td>205 Gorgas</Td>
                        </Tr>
                        <Tr>
                            <Td>Tuscaloosa D3</Td>
                            <Td>29 June 2019</Td>
                            <Td>Github</Td>
                        </Tr>
                    </Tbody>
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