import React from 'react';
import NavBar from '../components/Navbar.js';

function Header(props) {
    return (
        <>
            <h1>also / and</h1>
            <NavBar pages={props.pages} currentPage={props.currentPage} setPage={props.setPage}/>
        </>
    );
}

export default Header;