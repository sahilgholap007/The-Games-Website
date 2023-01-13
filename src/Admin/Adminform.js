import React from "react";
import db from "../firebaseConfig";

export default function Adminform() {
    const [gameName, setGameName] = React.useState("");
    const [gameImage, setGameImage] = React.useState("");
    const [gameFile, setGameFile] = React.useState("");


    return (
        <div className="game">
            <div className="Game-form">
                <h1>Game Form</h1>
                <form>
                    <input type="text" placeholder="Game Name" onChange={(e)=>{
                        setGameName(e.target.value)
                    }} />
                    <input type="file" placeholder="Game Image" onChange={(e)=>{
                        setGameImage(e.target.value)
                    }} />
                    <input type="file" placeholder="Game File" onChange={(e)=>{
                        setGameFile(e.target.value)
                    }} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}