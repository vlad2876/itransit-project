import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/Navibar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import React from "react";

function App() {
    return (
            <BrowserRouter>
                <NaviBar/>
                <AppRouter/>
            </BrowserRouter>
    );
}

export default App;
