import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Content.css";
import axios from "axios";
import Card from "./Card";


export default function Search() {
    const location = useLocation();
    const searchQuery = location.state.dataToSend;

    const [searchdata, setSearchData] = useState([]);

    useEffect(() => {

        const getSearch = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&append_to_response=videos`);
        let data = res.data.results.filter(item =>  item.poster_path !== null);
      
        setSearchData(data);
        
        }
        getSearch();

    }, [searchQuery])

    return (
        <div className="movie-container">

{searchdata.map((movie, index) => {
return (
    <Card key={index} name={movie.title} image={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} id={movie.id} poster={movie.backdrop_path} description={movie.overview} releaseDate={movie.release_date} />
)
})}
        
        </div>
    )
}