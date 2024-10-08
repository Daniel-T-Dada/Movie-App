'use client'
import Link from "next/link";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../SearchContext';

const Navbar = () => {

    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [menuIcon, setMenuIcon] = useState(false)

    const handleSmallerScreenNavigation = () => {
        setMenuIcon(!menuIcon)
    }

    const handleSearchIconClick = () => {
        setIsSearching(true);
    };

    const handleCancelSearch = () => {
        setSearchTerm(''); // Clear search term
        setIsSearching(false); // Hide the search input
    };

    const handleBlur = () => {
        if (!searchTerm) {
            setIsSearching(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;
            if (window.scrollY > heroHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar sticky top-0 z-50 `}>
                <div className={`navbar-back transition-all duration-500 ${isScrolled ? 'bg-gradient-to-b from-[#001133]  to-[#003477]' : 'bg-gradient-to-b  from-[#001133] via-[#002255] to-[#0034778f]'} w-full h-[80px] sm:h-[90px] fixed top-0 left-0 -z-10`}></div>
                <div className='flex justify-between items-center pt-3 pb-3 px-4 sm:px-8 lg:px-12'>

                    {/* Logo Section */}
                    <div className=" w-[200px] sm:w-[200px] lg:w-[160px] flex justify-between">
                        <Link href="/" onClick={handleSmallerScreenNavigation} className='flex justify-start items-center gap-2 h-[50px] sm:h-[68px]'>
                            <Image src="/Logo.png" alt="Double D Logo" width={20} height={10} className="sm:w-[25px] sm:h-[25px]" />
                            <h3 className='text-lg w-[100px] sm:w-[120px] sm:text-xl lg:text-2xl font-bold text-white'>Double D</h3>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <ul className='hidden lg:flex sm:hidden w-full md:w-6/12 justify-center items-baseline gap-4 sm:gap-6 lg:gap-8'>
                        <Link href='/'>
                            <li className='navlist'>Home</li>
                        </Link>
                        <Link href='/movies'>
                            <li className='navlist'>Movies</li>
                        </Link>
                        <Link href='/my-list'>
                            <li className='navlist'>My Lists</li>
                        </Link>
                        <Link href='/about'>
                            <li className='navlist'>About</li>
                        </Link>
                        <Link href='/contact'>
                            <li className='navlist'>Contact Us</li>
                        </Link>
                    </ul>

                    {/* Search and User Section */}
                    <div className="flex items-center gap-3 sm:gap-6 relative">
                        {/* Search Bar */}
                        <div className="flex items-center justify-center relative w-[200px] sm:w-[250px] md:w-[300px]">

                            {!isSearching && (
                                <SearchIcon
                                    className="text-2xl sm:text-3xl cursor-pointer absolute text-[#00bfff48] right-[16px] sm:right-[26px]"
                                    onClick={handleSearchIconClick}
                                />
                            )}

                            {/* Show the input field if searching */}
                            {isSearching && (
                                <div className="relative transition-all duration-500 ease-in-out transform translate-x-0">
                                    <input
                                        className={`w-full h-[40px] sm:h-[50px] border-[#00bfff48] border-[2px] border-solid bg-transparent placeholder:text-[#00bfff48] outline-none rounded-full px-4 sm:px-5
                                    transition-transform duration-500 ease-in-out ${isSearching ? 'translate-x-0' : 'translate-x-full'}`}
                                        type="search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search by title or category"
                                        onBlur={handleBlur}
                                        autoFocus
                                    />

                                    {/* Show cancel icon inside the input field */}
                                    <CancelIcon
                                        className="absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer text-[#00bfff48]"
                                        onClick={handleCancelSearch}
                                    />
                                </div>
                            )}
                        </div>

                        {/* User Icon */}
                        <div className="navbar-user sm:hidden items-center hidden lg:flex">
                            <AccountCircleIcon className="text-2xl sm:text-3xl text-white" />
                            <ArrowRightIcon className="hidden sm:block text-white" />
                            <ArrowDropDownIcon className="hidden" />
                        </div>
                    </div>

                    <div onClick={handleSmallerScreenNavigation} className='flex  lg:hidden'>
                        {menuIcon ?
                            (<CloseRoundedIcon size={25} className="text-[#f9f9f9] text-4xl" />)
                            :
                            (<MenuRoundedIcon size={25} className="text-[#f9f9f9] text-4xl" />)}
                    </div>

                    <div className={menuIcon ?
                        "lg:hidden absolute top-[70px] right-0  bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#001133] text-white text-center ease-in duration-300"
                        :
                        "lg:hidden absolute top-[70px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#001133] text-white text-center ease-in duration-300"}>

                        {/* Smaller screens - Navbar links */}
                        <div className="w-full">
                            <ul className="font-bold text-xl sm:text-2xl">
                                <li onClick={handleSmallerScreenNavigation} className="py-5 text-slate-300 hover:text-[#74cbff] cursor-pointer">
                                    <Link href="/">Home</Link>
                                </li>
                                <li onClick={handleSmallerScreenNavigation} className="py-5 text-slate-300 hover:text-[#74cbff] cursor-pointer">
                                    <Link href="/about">About</Link>
                                </li>
                                <li onClick={handleSmallerScreenNavigation} className="py-5 text-slate-300 hover:text-[#74cbff] cursor-pointer">
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>

                            <div className="flex flex-col justify-center items-center sm:text-2xl mt-16">
                                <Link href="/login" onClick={handleSmallerScreenNavigation}>
                                    <button className="bg-[#0040b0] text-slate-300 rounded-full  font-bold py-3 w-[250px] mb-5">Login</button>
                                </Link>
                                <Link href="/signup" onClick={handleSmallerScreenNavigation}>
                                    <button className="border-2 border-[#74cbff] text-slate-300 rounded-full font-bold py-3 w-[250px] mb-5">Sign up</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
