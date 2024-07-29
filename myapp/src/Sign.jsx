import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [userName,setName]=useState("");
  const [userPass,setPass]=useState("");
  const nav=useNavigate();
  const save=async(e)=>{
     e.preventDefault();
     let flag=false;
     const acc=await axios.get("https://prachikarle.github.io/JSON-Server/db.json");
     console.log(acc.data);
     for(let x of acc.data){
        if(x.username==userName && x.password==userPass){
           flag=true;
           alert("Login Successfully!");
           nav('/');
        }
     }
     if(!flag){
        alert("Invalid Username and Password!");
     }
  }
  return (
    <>
      <div className="row m-0 py-4">
        <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-5 m-auto cls">
          <form action="" onSubmit={(e)=>{save(e)}}>
             <div className="form-group my-3">
                <label htmlFor="">Username: </label>
                <input type="text"  className="form-control" placeholder="Enter User name" value={userName} onChange={(e)=>{setName(e.target.value)}}required />
             </div>
             <div className="form-group my-3">
                <label htmlFor="">Password: </label>
                <input type="password" className="form-control" placeholder="Enter Password" value={userPass} onChange={(e)=>{setPass(e.target.value)}} required />
             </div>
             <div className="form-group my-3 text-center">
                <button type="submit" className="btn btn-dark px-4 py-2">Sign In</button>
             </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sign;
