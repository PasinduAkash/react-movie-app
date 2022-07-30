import React from "react";
import { useLocation } from "react-router-dom";
import "./AboutMovie.css";


export default function AboutMovie() {

    const location = useLocation();
    const {title, poster, description, release} = location.state;

    return (
        <div className="info-container" style={{backgroundImage: `url(http://image.tmdb.org/t/p/original/${poster})`}}>
        <div className="synopsis-box">
<h1 className="synopsis-title">{title}</h1>
<p className="synopsis-about">{description}</p>
<p className="synopsis-release">{release}</p>
</div>
        </div>
    )
}