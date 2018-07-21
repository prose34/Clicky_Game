
import React from "react";
import "./Card.css";

const Card = props => (

    <div onClick = {() => props.Click(props.id)} className="cards comics">
        <div className="img-container">
            <img className="responsive-img" alt={props.name} src={props.image}/>
        </div>

        <div className="content">
            <ul>
                <li>
                    Name: {props.name}
                </li>  
                <li>
                    Significance: {props.significance}
                </li>    
            </ul>
        </div>
    </div>
);

export default Card;





