import "./searchitem.css";
import {Link } from "react-router-dom"; 

const SearchItem = ({item}) => {
  return (
    <div className="searchItem" key={item.empNo}>
      
      <div className="sItemDiscription">
        <h3  className="sItemTitle">{item.empName}</h3 >
        <span className="sItemDetails">{item.empAddressLine1}</span>
        <span className="sItemDetails">{item.empAddressLine2}</span>
        <span className="sItemDetails">{item.empAddressLine3}</span>
        <span className="sItemDetails">{item.departmentCode}</span>
        <span className="sItemDetails">{item.dateOfJoin}</span>
        <span className="sItemDetails">{item.dateOfBirth}</span>
        <span className="sItemDetails">{item.basicSalary}</span>
        <span className="sItemDetails">{item.isActive}</span>

        <Link to={`/employee/${item._id}`}><button className="sItemButton"><b>View</b></button></Link>
      </div>
    </div>
  )
}

export default SearchItem