import React, { useState } from "react";
import "./style.css";
import Inputs from "../inputs";
import {useNavigate } from 'react-router-dom'
import { doUserExists } from "../../functions/doUserExists";
import { storeUserData } from "../../functions/storeUserdata"; 

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [agency, setAgency] = useState("yes");
  const navigate=useNavigate();

  const handleClick =()=>{
    if(name==="" || email==="" || password==="" ||phone===""){
    alert("All * fields are mandatory");
    }else{
      if(doUserExists(email)===true){
        alert("userAlready exists");
      }else{
        storeUserData(name,email,password,phone,companyName,agency);
      }
      navigate("/login");
    }
  }

  const onOptionChange = (e) => {
    setAgency(e.target.value);
  };
  return (
    <div className="signUp-container">
      <div className="firstContainer">
        <div>
          <h1>Create your</h1>
          <h1>PopX account</h1>
        </div>
        <Inputs label={"Full Name"} req={true} setItem={setName} required={true}/>
        <Inputs label={"Phone number"} req={true} setItem={setPhone} required={true}/>
        <Inputs label={"Email address"} req={true} setItem={setEmail} required={true}/>
        <Inputs label={"Password"} req={true} setItem={setPassword} required={true}/>
        <Inputs label={"Company name "} setItem={setCompanyName}/>
        <div className="radio">
          <p className="req">Are You an agency?</p>
          <input
            type="radio"
            id="yes"
            name="isAgency"
            value="yes"
            checked={agency === "yes"}
            onChange={onOptionChange}
          />
          <label htmlFor="yes">Yes</label>

          <input
            type="radio"
            id="no"
            name="isAgency"
            value="no"
            checked={agency === "no"}
            onChange={onOptionChange}
          />
           <label htmlFor="no">No</label>
          
        </div>
      </div>
      <div className="sign-btn btn" onClick={handleClick}>Create Account</div>
     
     
    </div>
  );
};

export default SignUp
