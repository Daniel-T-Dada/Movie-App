'use client'
import Link from "next/link";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useContext, useState, useEffect } from 'react'; // Import useContext
import { SearchContext } from '../SearchContext'; // Import SearchContext

const Navbar = () => {

    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchIconClick = () => {
        setIsSearching(true);
    };

    const handleCancelSearch = () => {
        setSearchTerm(''); // Clear search term
        setIsSearching(false); // Hide the search input
    };

    const handleBlur = () => {
        if (!searchTerm) {
            setIsSearching(false); // Hide input if no text is in the search field
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
            <nav className={`navbar sticky top-0 z-60 `}>
                <div className={`navbar-back transition-all duration-500 ${isScrolled ? 'bg-gradient-to-b from-[#001133]  to-[#00347791]' : 'bg-gradient-to-b  from-[#001133] via-[#002255a6] to-[#0034770c]'} w-full h-[90px] fixed top-0 left-0 -z-10`}></div>
                <div className='flex justify-between items-center pt-3'>

                    <div>
                        <Link href="/" className='flex justify-center items-center gap-4 h-[68px]'>
                            <Image src="/Logo.png" alt="Double D Logo" width={25} height={25} />
                            <h3 className='text-xl font-bold'>Double D</h3>
                        </Link>
                    </div>

                    <ul className='flex w-6/12 justify-center items-baseline'>
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

                    <div className="flex justify-between items-center  gap-3 relative">
                        <div className="flex items-center justify-center relative w-[300px]">

                            {!isSearching && (
                                <SearchIcon
                                    className="text-3xl cursor-pointer absolute text-[#00bfff48] right-[26px]"
                                    onClick={handleSearchIconClick}
                                />
                            )}

                            {/* Show the input field if searching */}
                            {isSearching && (
                                <div className="relative transition-all duration-500 ease-in-out transform translate-x-0">
                                    <input
                                        className={`w-full h-[50px] border-[#00bfff48] border-[2px] border-solid bg-transparent placeholder:text-[#00bfff48] outline-none rounded-full px-5
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


                        <div className="navbar-user">
                            <AccountCircleIcon className="text-3xl" />
                            <ArrowRightIcon />
                            <ArrowDropDownIcon className="hidden" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
