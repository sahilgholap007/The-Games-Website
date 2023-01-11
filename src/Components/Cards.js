import React from "react";


export default function Cards(props) {

    return (
        <div className="hard">
            <div className="card-img">
                <img className="game-cover" src={require(`../Images/${props.image}`)} alt="card-img"/>
                <h1>{props.game}</h1>
            </div>
        </div>
    );
}