'use client'
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
    return (
        <>
            <footer className="z-50  flex  justify-center flex-col w-full bg-[#19305e] rounded rounded-t-3xl">
                <div className="mt-32 flex justify-center">
                    <Link href="/" className='flex items-center justify-center gap-4 h-[68px]'>
                        <Image src="/Logo.png" alt="Double D Logo" width={30} height={30} />
                        <h3 className='text-2xl font-bold'>
                            Double D
                        </h3>
                    </Link>
                </div>

                <div className=" flex items-center  justify-center gap-2 mt-[40px]">
                    <input type="email" placeholder="Enter your email" className="w-[275px] h-[50px] rounded-md border-[#00BFFF] border-[2px] border-solid bg-[#001133] pl-4 placeholder:text-[#00BFFF] focus:outline-none focus:outline-[#00BFFF]" />
                    <button className="btn rounded-md">Subscribe Now</button>
                </div>

                <div className="flex justify-center mt-[30px]">
                    <ul className='flex  w-5/12  justify-between items-baseline text-gray-500'>
                        <Link href='/'>
                            <li className='foot'>
                                Home
                            </li>
                        </Link>

                        <Link href='/about'>
                            <li className='foot'>
                                About
                            </li>
                        </Link>

                        <Link href='/help'>
                            <li className='foot'>
                                Help
                            </li>
                        </Link>
                        <Link href='/terms'>
                            <li className='foot'>
                                Term of use
                            </li>
                        </Link>
                        <Link href='/faqs'>
                            <li className='foot'>
                                FAQs
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="socials flex justify-center items-center gap-5 mt-10 text-gray-500">
                    <Link href="https://www.facebook.com">
                        <FaFacebook className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.instagram.com">
                        <RiInstagramFill className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.x.com">
                        <FaTwitter className="h-6 w-6" />
                    </Link>
                </div>

                <div className="flex justify-between border-t-2 mt-10 pt-5 pb-4 text-slate-300 border-slate-700">
                    <div className="lang flex justify-center items-center">
                        <span className=" lang-span">English</span>
                        <span className="lang-span">Yoruba</span>
                        <span className="lang-span">Igbo</span>
                    </div>
                    <div className="copy">
                        <p className="text-gray-500">Double D  ||  {(new Date().getFullYear())} &copy; All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer