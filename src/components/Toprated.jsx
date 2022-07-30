import React, { useEffect, useState } from "react";
import "./Content.css";
import Card from "./Card";
import axios from "./axios";


function Toprated () {

    const [topratedmovies, setTopratedmovies] = useState([]);

    useEffect(() => {
    const getTopratedmovies = async () => {
        let res = await axios.get(`/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
        let data = res.data;
        setTopratedmovies(data.results);
    }
     getTopratedmovies();
    }, [])

    return (
        <div className="movie-container">
        
        {topratedmovies.map((movie, index) => {
return (
    <Card key={index} name={movie.title} image={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} id={movie.id} poster={movie.backdrop_path} description={movie.overview} releaseDate={movie.release_date} />
)
})}

        </div>
    )

}

export default Toprated;