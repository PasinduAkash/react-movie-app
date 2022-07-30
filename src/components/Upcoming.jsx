import React, { useEffect, useState } from "react";
import "./Content.css";
import Card from "./Card";
import axios from "./axios";

export default function Upcoming() {

    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
    const getUpcomingMovies = async () => {
        let res = await axios.get(`/upcoming?api_key=${process.env.REACT_APP_API_KEY}`);
        let data = res.data;
        setUpcomingMovies(data.results);
    }
     getUpcomingMovies();
    }, [])


    return (
<div className="movie-container">

{upcomingMovies.map((movie, index) => {
return (
    <Card key={index} name={movie.title} image={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} id={movie.id} poster={movie.backdrop_path} description={movie.overview} releaseDate={movie.release_date} />
)
})}

</div>
    );
}