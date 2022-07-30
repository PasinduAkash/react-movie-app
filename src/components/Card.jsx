import React from "react";
import {Link} from "react-router-dom";
import "./Card.css";

function Card(props) {
return (
   
    <div className="data-box">
     <Link to={`/${props.id}`} state={{
        title: props.name,
        poster: props.poster,
        description: props.description,
        release: props.releaseDate
     }}>
<img className="movie-poster" src={props.image} alt={props.name}></img>
<p className="movie-name">{props.name}</p>
</Link>
    </div>
  
  
)
}

export default Card;