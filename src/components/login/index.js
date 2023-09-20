import React,{ useState } from "react";
import "./style.css";
import Inputs from "../inputs";
import {useNavigate} from "react-router-dom";
import { isUserAuthorized } from "../../functions/isUserAuthorized";
import { setCurrentUser } from "../../functions/setCurrentUser";
 


const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  const navigate=useNavigate();

  const handleClick =()=>{
    if(email==="" || password===""){
    alert("All fields are mandatory");
    }else{
      if(isUserAuthorized(email,password)===true){
        setCurrentUser(email);
        setTimeout(()=>{
          navigate("/profile");
        },500)
      }
    }
  }
 

  return (
    <div className="login-container">
      <div>
        <h2>Signin to your</h2>
        <h2>PopX account</h2>
      </div>
      <div>
        <p>Lorem ipsum, dolor sit amet,</p>
        <p>consectetur adipisicing elit,</p>
      </div>
      <Inputs label={"Email address"} setItem={setEmail} />
      <Inputs label={"Password"} setItem={setPassword}/>
      <button className="log-btn"onClick={handleClick}>Login</button>      
    </div>
  );
};

export default Login;
