import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./pages/home/home"
import AddEmployee from "./pages/Add/addempolyee";
import './App.css';

function App() {
   
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/addemployee" element={<AddEmployee/>}/>
            </Routes>
        </BrowserRouter>
            
 ) }

export default App;
