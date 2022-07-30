import React from "react";
import {Route, Routes, useParams} from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Content from "./Content";
import Toprated from "./Toprated";
import Nowplaying from "./Nowplaying";
import Upcoming from "./Upcoming";
import Search from "./Search";
import AboutMovie from "./AboutMovie";

function App() {

    let {movieid} = useParams();
  
  
    return (
        <div className="container">
<Navbar />


<Routes>
    <Route path="/" element={<Content />} />
    <Route path="/toprated" element={<Toprated />} />
    <Route path="/nowplaying" element={<Nowplaying />} />
    <Route path="/upcoming" element={<Upcoming />} />
    <Route path="/search" element={<Search />} />
    <Route path={`/:${movieid}`} element={<AboutMovie />} />
</Routes>

</div>
    );
}

export default App;