import React,{ useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export function MyAccount(){
    const{setIsAuth, userDetails} = useContext(AppContext)
    const[state, setState] = useState({ email: "", password: ""});
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setState({...state, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
       e.preventDefault();
     if(state.email === userDetails.email && state.password === userDetails.password){
        alert("Correct Credentials!")
     }
     else{
        alert("Incorrect");
     }
    }
    return(
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <label>Email:</label>
         <input onChange={handleChange} name="email" type = "text"/>
         <br/>
         <label>Password:</label>
         <input onChange={handleChange} name="password" type="text"/>
        <br/>
         <input type="submit"/>
         </form>
         </>
    )
}

