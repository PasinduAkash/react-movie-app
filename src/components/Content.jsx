import React, { useEffect, useState } from "react";
import "./Content.css";
import Card from "./Card";
import axios from "./axios.js";

function Content() {

    const [movies, setMovies] = useState([]);
 
useEffect(() => {
const getMovies = async () => {
    let res = await axios.get(`/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    let data = res.data;
    setMovies(data.results);
}
 getMovies();
}, [])

    return (

        <div className="movie-container">
 
{movies.map((movie, index) => {
return (
    <Card key={index} id={movie.id} name={movie.title} image={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} poster={movie.backdrop_path} description={movie.overview} releaseDate={movie.release_date} />
)
})}

        </div>
    );
}

export default Content;
