import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./pages/home/home"
import AddEmployee from "./pages/Add/addempolyee";
import ListAll from "./pages/searchall/searchall";
import List from "./pages/search/search";
import EmployeeId from "./pages/id/empolyeeid";


function App() {
   
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/addemployee" element={<AddEmployee/>}/>
              <Route path="/searchall" element={<ListAll/>}/>
              <Route path="/search" element={<List/>}/>
              <Route path="/employeeid" element={<EmployeeId/>}/>

            </Routes>
        </BrowserRouter>
            
 ) }

export default App;
