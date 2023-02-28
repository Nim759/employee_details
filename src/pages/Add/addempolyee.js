import "./addemployee.css"
import { useState } from 'react'
import FormInput from "../../components/formInput/FormInput";
import {useNavigate  } from "react-router-dom";


const AddEmployee = () => {
    const navigate = useNavigate()
    const [selectedOption, setSelectedOption] = useState("option1");
    const [values, setValues] = useState({
        empNo: "",
        empName: "",
        empAddressLine1: "",
        empAddressLine2: "",
        empAddressLine3: "",
        departmentCode: "",
        dateOfJoin: "",
        dateOfBirth: "",
        basicSalary: "",
      

     
    });

  const inputs =[
   {
      id: 1,
        name: "empNo",
        type: "text",
        placeholder: "empNo",
        errorMessage:
          "Provide employee number",
        label: "Employee ID",
        required: true,
   },
  
   
   {
    id: 2,
      name: "empName",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0]{3,16}$",
      required: true,
    }
 ,
   {
        id: 3,
        name: "empAddressLine1",
        type: "text",
        placeholder: "Address Line 1",
        errorMessage: "Provide Address line 1!",
        label: "Address",
        required: true,
   }
   ,
   {
        id: 4,
        name: "empAddressLine2",
        type: "text",
        placeholder: "Address Line 2",
        errorMessage: "Provide Address line 2!",
    
    
   },

    {
    id: 5,
    name: "empAddressLine3",
    type: "text",
    placeholder: "Address Line 3",
    errorMessage: "Provide Address line 3!",


    },

    {
    id: 6,
    name: "departmentCode",
    type: "text",
    placeholder: "Department Code",
    errorMessage: "Department code is required!",
    label: "Department Code",
    required: true


},

{
    id: 7,
    name: "dateOfJoin",
    type: "date",
    placeholder: "date",
    errorMessage: "Provide date of join!",
    label: "Date of Join",
    required: true


},

{
    id: 8,
    name: "dateOfBirth",
    type: "date",
    placeholder: "Date of birth",
    errorMessage: "Provide Date of birth!",
    label: "Date of birth",
    required: true


},

{
    id: 9,
    name: "basicSalary",
    type: "double",
    placeholder: "Basic Salary",
    errorMessage: "Provide Provide Basic Salary!",
    label: "Basic Salary",
    required: true


}
  
  ];

  
 

  
  const onChange = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]:value});
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { 

        empNo,
        empName,
        empAddressLine1,
        empAddressLine2,
        empAddressLine3,
        departmentCode,
        dateOfJoin,
        dateOfBirth,
        basicSalary,
      } = values


      
      const res = await fetch("http://localhost:5000/api/v1.0/Employee",{
      method:"POST",
      headers:{"Content-Type":"application/json" },
      
      body:JSON.stringify({
        empNo,
        empName,
        empAddressLine1,
        empAddressLine2,
        empAddressLine3,
        departmentCode,
        dateOfJoin,
        dateOfBirth,
        basicSalary,
        isActive:selectedOption
        } 
      )
        
    })
    
    const data = await res.json()
    console.log(data);

    if(data.status === 422 || !data){
      console.log('invalid registration');
    }else{
      navigate('/search', { replace: true });
      window.location.reload();
    }
  };
return (
  <div className='regPage'>
  
      <div className="fullForm">
      <form method = "POST" className="regForm"  >
          <h1>Employee Registration</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

<label>
        <input
          type="radio"
          name="option"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        Still Active
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        Still not Active
      </label>
           <button className='mybutton'   onClick={handleSubmit} >Register</button>
        </form>
      </div>
  </div>
)
}

export default AddEmployee;