import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between bg-[#1e72aa] h-auto  lg:h-[760px] text-[#1A2E35] rounded-3xl relative z-10 p-10 mt-2'>


                <div className='lg:pl-10 relative z-40 text-center lg:text-left mt-12'>
                    <h1 className='text-3xl lg:text-4xl sm:text-4xl text-slate-300 font-Semibold'>Ooops...</h1>
                    <h1 className='text-2xl lg:text-3xl sm:text-4xl text-slate-300  lg:mt-0'>Page not found</h1>

                    <p className='text-sm lg:text-xl sm:text-xl text-slate-300 mt-4'>The page you are looking for does not EXIST</p>

                    <Link href='/'>
                        <button className='btn mt-8 sm:h-[64px] sm:mb-20 sm:mt-20 sm:text-2xl lg:mt-[74px] px-6 py-3 text-white bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 from-pink-500 to-orange-500 rounded-lg transition'>
                            Go Back
                        </button>
                    </Link>
                </div>


                <div className="relative z-40 mt-10 lg:mt-0">
                    <Image
                        src='/404.png'
                        width={700}
                        height={300}
                        alt='Error 404'
                        className="mx-auto lg:mx-0"
                    />
                </div>

                {/* <Image
                    src='/Vector 7.png'
                    width={1865}
                    height={500}
                    alt=''
                    className="absolute -z-10 top-0 -rotate-12 opacity-30"
                /> */}
            </div>
        </>
    )
}
export default NotFound;
