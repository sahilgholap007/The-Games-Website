import React from "react";
import logo from "../logo/Nostalgic - 90's.png"
import searchlogo from "../logo/search.png"
import { useState } from "react";

export default function Navbar() {

    const[search, newSearch] = useState("")

    function display(){
        console.log(search)
    }
    return (
        <div className="navbar">
            <img src={logo} alt="logo" id="logo" />
            <div className="nav-list">
                <ul>
                    <li><a href="#d">Home</a></li>
                    <li><a href="#s">About</a></li>
                    <li><a href="#asd">Categories</a></li>
                    <input type="text" placeholder="Search.." name="search" onChange={e=>{
                        newSearch(e.target.value)
                    }}/>
                    <button type="submit" onClick={display}><img src={searchlogo} alt="search" id="search"/></button>
                </ul>
            </div>
        </div>
    );
}