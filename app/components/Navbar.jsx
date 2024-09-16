import Link from "next/link"
import Image from "next/image"
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
Link
const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky top-0 z-50">
                <div className="navbar-back  bg-gradient-to-b from-[#001133] w-full h-[90px] -z-10 fixed top-0 left-0"></div>
                <div className='flex justify-between items-center pt-5 text-white border-slate-700'>

                    <div >
                        <Link href="/" className='flex justify-center items-center gap-4 h-[68px]'>
                            <Image src="/Logo.png" alt="Double D Logo" width={25} height={25} />
                            <h3 className='text-xl font-bold'>
                                Double D
                            </h3>
                        </Link>
                    </div>

                    <ul className='flex  w-6/12  justify-center items-baseline'>
                        <Link href='/'>
                            <li className='navlist'>
                                Home
                            </li>
                        </Link>

                        <Link href='/movies'>
                            <li className='navlist'>
                                Movies
                            </li>
                        </Link>

                        <Link href='/my-list'>
                            <li className='navlist'>
                                My Lists
                            </li>
                        </Link>
                        <Link href='/about'>
                            <li className='navlist'>
                                About
                            </li>
                        </Link>
                        <Link href='/contact'>
                            <li className='navlist'>
                                Contact Us
                            </li>
                        </Link>
                    </ul>

                    <div className="w-[150px] flex justify-between items-center">
                        <div>
                            {/* <input type="text" placeholder="Search..." /> */}
                            <SearchIcon className="text-3xl" />
                        </div>

                        <div className="navbar-user">
                            {/* <Link href="/profile">Profile</Link> */}
                            <AccountCircleIcon className="text-5xl" />
                            <ArrowRightIcon />
                            <ArrowDropDownIcon className="hidden" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar