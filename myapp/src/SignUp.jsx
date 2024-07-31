import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
    const nav=useNavigate();
    const [userName,setName]=useState("");
    const [userNameErr,setNameErr]=useState("");
    const [userEmail,setEmail]=useState("");
    const [userErr,setemailErr]=useState("");
    const [pass,setPass]=useState("");
    const [Passerr,setPasserr]=useState("");
    const [cpass,setPass1]=useState("");

    const save=async(e)=>{
        e.preventDefault();
        let flag=false;
        const acc=await axios.get("https://prachikarle.github.io/JSON-Server/db.json");
        console.log(acc.data);
        for(let x of acc.data){
            if(x.username===userName){
                flag=true;
             setNameErr("Username Already exists");
            }
            if(x.useremail==userEmail){
                flag=true;
                setemailErr("Email Already exists");
            }
            
        }
        if(!flag){
            var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if (pass !== cpass) {
              setPasserr("Please enter same password");
            } 
            else if (!regex.test(pass)) {
              setPasserr(
                "Password should contain atleast one number and one special character"
               );
            } 
            else{
               alert("Account created Successfully!");
               const arr={
                username:userName,
                password:pass,
                useremail:userEmail,
               }
               console.log(arr);
             
               setName("");
               setNameErr("");
               setPass("");
               setPasserr("");
               setPass1("");
               nav('/');
            }
        }

    }
    return(
        <>
         <div className="row m-0 py-4 cls">
        <div className="col-lg-6 col-md-8 col-sm-10 col-12 p-5 m-auto">
          <form action="" onSubmit={(e)=>{save(e)}}>
             <div className="form-group my-3">
                <label htmlFor="">Username: </label>
                <input type="text"  className="form-control" placeholder="Enter Username" value={userName} onChange={(e)=>{setName(e.target.value)}}required />
                <p className="text-danger">{userNameErr}</p>
             </div>
             <div className="form-group my-3">
                <label htmlFor="">Email: </label>
                <input type="email"  className="form-control" placeholder="Enter email" value={userEmail} onChange={(e)=>{setEmail(e.target.value)}}required />
                <p className="text-danger">{userErr}</p>
             </div>
             <div className="form-group my-3">
                <label htmlFor="">Password: </label>
                <input type="password" className="form-control" placeholder="Enter Password" value={pass} onChange={(e)=>{setPass(e.target.value)}} required />
                <p className="text-danger">{Passerr}</p>
             </div>
             <div className="form-group my-3">
                <label htmlFor="">Confirm Password: </label>
                <input type="password" className="form-control" placeholder="Enter Confirm Password" value={cpass} onChange={(e)=>{setPass1(e.target.value)}} required />
             </div>
             <div className="form-group my-3 text-center">
                <button type="submit" className="btn btn-dark px-4 py-2">Create Account</button>
             </div>
          </form>
        </div>
      </div>
        </>
    )
}

export default SignUp;