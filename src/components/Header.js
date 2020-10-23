import React from 'react';
import NavBar from '../components/Navbar.js';

function Header(props) {
    return (
        <div className='bg-light pt-4'>
            <h1>also / and</h1>
            <NavBar
            pages={props.pages}
            currentPage={props.currentPage}
            setPage={props.setPage}/>
        </div>
    );
}

export default Header;