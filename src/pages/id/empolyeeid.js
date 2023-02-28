import './employeeid.css'
import useFetch from "../../hooks/useFetch";
import React from 'react'
import { userId } from 'react';
import { Link } from 'react-router-dom';



const EmployeeId = () => {
  const User =userId();
  const id = User.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`http://localhost:5000/api/v1.0/employee/${id}`);


  return (
    <div>
     
      {loading ? ("Loading") : (
        <>
        <div className="empContainer">
        <div className="empWrapper">
          <h1 className="empTitle">{data.empName}</h1>
          <div className="empeAddress">
            <span>{data.empAddressLine1}</span>
            <span>{data.empAddressLine2}</span>
            <span>{data.empAddressLine3}</span>
            <span>{data.departmentCode}</span>
            <span>{data.dateOfJoin}</span>
            <span>{data.dateOfBirth}</span>
            <span>{data.basicSalary}</span>
            <span>{data.isActive}</span>
         
        <div className='buttons'><Link to="/delete"> <button className='delete'>Delete</button></Link>
         <Link to="/update"><button className='delete'>Update</button></Link></div>

          </div>
          
  
        </div>
        
      </div>
        </>
      ) }
      
      
    </div>
  )
}

export default EmployeeId