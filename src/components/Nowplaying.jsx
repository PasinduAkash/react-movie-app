import React, { useEffect, useState } from "react";
import "./Content.css";
import Card from "./Card";
import axios from "./axios";

export default function Nowplaying() {

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    useEffect(() => {
    const getNowPlayingMovies = async () => {
        let res = await axios.get(`/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
        let data = res.data;
        setNowPlayingMovies(data.results);
    }
     getNowPlayingMovies();
    }, [])


    return (
<div className="movie-container">

{nowPlayingMovies.map((movie, index) => {
return (
    <Card key={index} name={movie.title} image={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} id={movie.id} poster={movie.backdrop_path} description={movie.overview} releaseDate={movie.release_date} />
)
})}

</div>
    );
}