import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";

function Navbar() {

const [searchMovie, setSearchMovie] = useState("");
const [sidebar, setSideBar] = useState(false);

const navigate = useNavigate();

async function handleSubmit(e) {
    e.preventDefault();

    const searchQuery = searchMovie.replace(/\s+/g, "+").toLowerCase();

  navigate("/search", {
    state: {
        dataToSend: searchQuery
    }
  })

  setSearchMovie("");

}

function handleClick() {
  setSideBar(true);
}

return (
<div className="navbar">

    <h1 className="site-name"><i onClick={handleClick} class="fa-solid fa-bars hamburger-icon"></i> FLICKED</h1>
    
    <form onSubmit={handleSubmit} method="post">
        <input onChange={e => setSearchMovie(e.target.value)} type="text" placeholder="Search Movies..." spellCheck="false" value={searchMovie}></input>
        <button type="submit">Search</button>
    </form>

<Sidebar add={sidebar} reset={setSideBar} />

</div>
);
}

export default Navbar;