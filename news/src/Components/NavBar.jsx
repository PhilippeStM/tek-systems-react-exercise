import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h1>TEK News</h1>
            <ul>
                <li>
                    <Link to="/"><span className="navBar">Home</span></Link>
                </li>
                <li>
                    <Link to="/sports"><span className="navBar">Sports</span></Link>
                </li>
                <li>
                    <Link to="/weather"><span className="navBar">Weather</span></Link>
                </li>
                <li>
                    <Link to="/politics"><span className="navBar">Politics</span></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;