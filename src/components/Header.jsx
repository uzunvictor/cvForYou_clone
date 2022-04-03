import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { FaCaretDown } from 'react-icons/fa';
import logo from '../assets/img/logo.png';
import enFlag from '../assets/img/flags/logo.png'


function Header(props) {

    const [menuLinks, setMenuLinks] = useState([
        "Resume examples",
        "Pricing",
        "Blog",
    ])

    return (
        <header id="header">
            <div className="header-container">
                <div className="ms-3">
                    <img src={logo} alt="logo" className='logo' />
                </div>

                <div className="d-flex">
                    {menuLinks.map(link =>
                        <a href="#" className='py-4 px-3 text-secondary text-decoration-none'>{link}</a>
                    )}
                </div>

                <div className="d-flex">

                    <a href="#" className="py-4 px-3 text-secondary text-decoration-none ">
                        <BiUser size={25} />
                        <span className='mx-1'>Sign In</span>
                        <FaCaretDown size={10} />
                    </a>


                    <a href="#" className="py-4 px-3 text-secondary text-decoration-none ">
                        <span className='mx-1'><img src={enFlag} className="flag" alt="en-us flag" /></span>
                        <span className='mx-1'>EN</span>
                        <FaCaretDown size={10} />
                    </a>

                </div>
            </div>
        </header>
    );
}

export default Header;