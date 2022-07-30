import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import "./Sidebar.css";


export default function Sidebar(props) {
   
 return (
<div className={props.add ? "open-sidebar" : "sidebar"}>
<ul>
    <h3 className="close" onClick={() => props.reset(false)}>X</h3>
    <CustomLink to="/">Trending</CustomLink>
    <CustomLink to="/toprated">Top Rated</CustomLink>
    <CustomLink to="/nowplaying">Now playing</CustomLink>
    <CustomLink to="/upcoming">Upcoming</CustomLink>
</ul>
</div>
 );
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
    </li>
    )
}