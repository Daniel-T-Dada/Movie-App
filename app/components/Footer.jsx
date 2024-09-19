'use client'
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <footer className="z-50 flex flex-col justify-center items-center w-full bg-[#19305e] rounded-t-3xl p-6 sm:p-8 lg:p-12">
                {/* Logo Section */}
                <div className="mt-16 sm:mt-24 lg:mt-32 flex justify-center">
                    <Link href="/" className="flex items-center justify-center gap-4 h-[68px]">
                        <Image src="/Logo.png" alt="Double D Logo" width={30} height={30} />
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                            Double D
                        </h3>
                    </Link>
                </div>

                {/* Subscription Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-10 sm:mt-[40px]">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-[250px] sm:w-[275px] h-[45px] sm:h-[50px] rounded-md border-[#00BFFF] border-[2px] bg-[#001133] pl-4 placeholder:text-[#00BFFF] focus:outline-none"
                    />
                    <button className="btn rounded-md mt-2 sm:mt-0 w-[150px] h-[45px] sm:h-[50px] bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-pink-500 hover:to-orange-500">
                        Subscribe Now
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center mt-6 sm:mt-[30px]">
                    <ul className="flex flex-col sm:flex-row w-full sm:w-8/12 lg:w-5/12 justify-center items-center gap-4 sm:gap-8 text-gray-400">
                        <Link href='/'>
                            <li className="foot">Home</li>
                        </Link>
                        <Link href='/about'>
                            <li className="foot">About</li>
                        </Link>
                        <Link href='/help'>
                            <li className="foot">Help</li>
                        </Link>
                        <Link href='/terms'>
                            <li className="foot">Terms of Use</li>
                        </Link>
                        <Link href='/faqs'>
                            <li className="foot">FAQs</li>
                        </Link>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="socials flex justify-center items-center gap-5 mt-8 sm:mt-10 text-gray-400">
                    <Link href="https://www.facebook.com">
                        <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />
                    </Link>
                    <Link href="https://www.instagram.com">
                        <RiInstagramFill className="h-5 w-5 sm:h-6 sm:w-6" />
                    </Link>
                    <Link href="https://www.x.com">
                        <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
                    </Link>
                </div>

                {/* Language and Copyright Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-t-2 mt-8 sm:mt-10 pt-4 sm:pt-5 pb-4 text-slate-300 border-slate-700 w-full">
                    <div className="lang flex gap-4 justify-center">
                        <span className="lang-span">English</span>
                        <span className="lang-span">Yoruba</span>
                        <span className="lang-span">Igbo</span>
                    </div>
                    <div className="copy mt-4 sm:mt-0">
                        <p className="text-gray-400 text-sm sm:text-base">
                            Double D  ||  {(new Date().getFullYear())} &copy; All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
