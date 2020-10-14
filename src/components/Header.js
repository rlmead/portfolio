import React from 'react';
import NavBar from '../components/Navbar.js';

function Header(props) {
    return (
        <>
            <h1>also / and</h1>
            <h2>{props.pages[0]}</h2>
            <NavBar />
        </>
    );
}

export default Header;