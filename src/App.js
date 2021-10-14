import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/Navibar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import React, {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Spinner} from "react-bootstrap";
import "./App.css"

function App() {

    return (
        <BrowserRouter>
            <NaviBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
