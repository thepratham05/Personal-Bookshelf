import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <h1>Personal Bookshelf</h1>
            <Link to='/'>Search Books</Link>
            <Link to='/bookshelf'>My Bookshelf</Link>
        </nav>
    );
};

export default NavBar;