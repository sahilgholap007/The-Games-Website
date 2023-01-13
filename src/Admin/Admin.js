import React from "react";
import { useState } from "react";

export default function Admin() {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")


    function handleChange(){
        
        if(username === "sahil" && password === "gholapsahil007" ){
            window.location.href = "/admin/Adminform"
        }
        else{
            alert("Invalid Username and password")
        }
    }

    return (
        <div className="admin">
            <div className="admin-login">
                <h1>Admin Login</h1>
                <form>
                    <input type="text" placeholder="Username" onChange={(e)=>{
                        setUsername(e.target.value)
                    }} />
                    <input type="password" placeholder="Password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>

                    {/*eslint-disable-next-line*/}
                    <a onClick={handleChange}>Login</a>
                </form>
            </div>
        </div>
    );
}