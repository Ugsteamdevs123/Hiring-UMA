import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";



function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

    const toggleNavbar = () => {
        setNavbarCollapsed(!isNavbarCollapsed);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img className="h-12 md:h-16 lg:h-20 xl:h-24" src={logo} alt="Logo" />
                        </Link>
                    </div>

                    {/* Navigation items on the right */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {/* Home link */}
                        <Link to="/" className="text-gray-700 hover:font-bold hover:text-gray-900 hover:border-b-2 hover:border-[#5DADEC]">HOME</Link>

                        {/* Service dropdown */}
                        <div className="relative">
                            <button onClick={toggleDropdown} className="text-gray-700 hover:text-gray-900 focus:outline-none border-b-2 border-[#5DADEC] hover:border-white font-bold">
                            SERVICES
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <Link to="/contract-staffing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CONTRACT STAFFING</Link>
                                        <Link to="/permanent-staffing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">PERMANENT STAFFING</Link>
                                        <Link to="/contract-to-hire-staffing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CONTRACT TO HIRE STAFFING</Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Apply for a job link */}
                        <Link to="/apply-for-job" className="text-gray-700 hover:font-bold hover:text-gray-900 hover:border-b-2 hover:border-[#5DADEC]">APPLY FOR A JOB</Link>

                        {/* Reach us link */}
                        <Link to="/reach-us" className="text-gray-700 hover:font-bold hover:text-gray-900 hover:border-b-2 hover:border-[#5DADEC]">REACH US</Link>
                    </div>

                    {/* Collapse button for small screens */}
                    <button
                        onClick={toggleNavbar}
                        // className="inline-flex md:hidden items-center justify-center p-2 m-2 w-12 h-12 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        className="inline-flex md:hidden items-center justify-center p-2 m-2 w-12 h-12 text-gray-500 rounded-lg "
                        aria-controls="navbar-default"
                        aria-expanded={!isNavbarCollapsed}
                    >
                        {isNavbarCollapsed ? <GiHamburgerMenu className='w-12 h-12' /> : <RxCross1 className='w-12 h-12' />}
                    </button>
                </div>

                {/* Collapsible navbar items for small screens */}
                {!isNavbarCollapsed && (
                    <div className="md:hidden mt-2 flex flex-col items-center space-y-4">
                        <Link to="/" className="text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-[#A819FF]">HOME</Link>
                        <div className="relative">
                            <button onClick={toggleDropdown} className="text-gray-600 hover:text-gray-900 focus:outline-none border-b-2 border-[#A819FF] hover:border-white font-bold">
                            SERVICES 
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <Link to="/contract-staffing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CONTRACT STAFFING</Link>
                                        <Link to="/permanent-staffing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">PERMANENT STAFFING</Link>
                                        <Link to="/contract-to-hire-staffing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CONTRACT TO HIRE STAFFING</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link to="/apply-for-job" className="text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-[#A819FF]">APPLY FOR A JOB</Link>
                        <Link to="/reach-us" className="text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-[#A819FF]">REACH US</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;