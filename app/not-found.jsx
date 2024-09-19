import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-between bg-[#2f9bc9] h-auto lg:h-[760px] text-[#1A2E35] rounded-lg relative z-50 p-10'>
                
                {/* Left Section (Text) */}
                <div className='lg:pl-20 relative z-40 text-center lg:text-left'>
                    <h1 className='text-4xl lg:text-5xl font-bold'>Ooops...</h1>
                    <h1 className='text-4xl lg:text-5xl mt-4 lg:mt-0'>Page not found</h1>

                    <p className='text-lg lg:text-xl mt-8'>The page you are looking for does not EXIST</p>

                    <Link href='/'>
                        <button className='btn mt-8 lg:mt-[74px] px-6 py-3 text-white bg-[#007BFF] rounded-lg hover:bg-[#0056b3] transition'>
                            Go Back
                        </button>
                    </Link>
                </div>

                {/* Right Section (Image) */}
                <div className="relative z-40 mt-10 lg:mt-0">
                    <Image 
                        src='/404.png' 
                        width={500} 
                        height={333} 
                        alt='Error 404' 
                        className="mx-auto lg:mx-0"
                    />
                </div>

                {/* Background Image */}
                <Image 
                    src='/Vector 7.png'  
                    width={1865} 
                    height={500} 
                    alt='' 
                    className="absolute -z-10 top-0 rotate-10 opacity-30"
                />
            </div>
        </>
    )
}
export default NotFound;
