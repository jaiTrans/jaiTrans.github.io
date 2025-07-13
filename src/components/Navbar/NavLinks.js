import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#clients">
                Clients
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink
                smooth
                to="/#enquiry"
                className="bg-blue-900 hover:bg-blue-700 text-white text-center font-bold py-3 px-6 rounded transition duration-200" to="/#enquiry">
                     Enquire Now
            </HashLink>
          
        </>
    )
}

export default NavLinks;
