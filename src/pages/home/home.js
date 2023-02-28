import "./home.css";
import {Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="fullbodyContainer">
       
        <div className="bodyContainer">
          <div className="container">
              <h1 style={{textAlign:"center"}}>Hello User</h1>
              <h1 style={{textAlign:"left"}}>Click your choice,</h1>
              <div className="buttons">
              <Link to="/addemployee"><button className="Button1">Add Employee</button></Link>
              <Link to="/searchall"> <button className="Button1">Search Employee</button></Link>
              </div>
          </div>
      </div>
  
      </div>
      
    );
  };
  
  export default Home;