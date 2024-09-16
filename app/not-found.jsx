import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
    return (
        <>
            <div className='flex items-center justify-between bg-[#2f9bc9] h-[760px] text-[#1A2E35] rounded-lg relative z-50'>
                <div className='pl-20 relative z-40'>
                    <h1 className='text-5xl font-bold'>Ooops...</h1>
                    <h1 className='text-5xl'>Page not found</h1>

                    <p className='text-xl mt-8'>The page you are looking for does not EXIST</p>

                    <Link href='/'>
                        <button className='btn mt-[74px]'>
                            Go Back
                        </button>
                    </Link>
                </div>
                <div className="relative z-40">
                    <Image src='/404.png' width={768} height={512} alt='Error 404' className=""></Image>
                    
                </div>
                <Image src = '/Vector 7.png'  width={1865} height={500} alt='' className="absolute -z-10 top-0 rotate-10  bg-transparent opacity-30"></Image>
            </div>
        </>
    )
}
export default NotFound