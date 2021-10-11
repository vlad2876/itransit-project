import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/Navibar";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <NaviBar/>
    </BrowserRouter>
  );
}

export default App;
