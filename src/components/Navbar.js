import React from 'react';

function NavBar(props) {
    return (
        <nav className='navbar navbar-expand navbar-light bg-light mb-3'>
            <div className='mx-auto'>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                    {
                        // generate buttons dynamically using props.pages
                        props.pages.map((item, index) => {
                            return (
                                <li
                                    className={'nav-item' + ((props.currentPage === index) ? ' active' : '')}
                                    onClick={() => props.setPage(index)}
                                    key={index}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;