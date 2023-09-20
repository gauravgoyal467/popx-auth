import React from "react";
import './style.css'

const Inputs = ({ label,req,setItem,required}) => {
  return (
    <div className={req ? "form-group required" :"form-group"}>
      <label>{label}</label>
      <input 
        type="text" 
        onChange={(e)=>setItem(e.target.value)} 
        required={required}
        />
    </div>
  );
};

export default Inputs;
