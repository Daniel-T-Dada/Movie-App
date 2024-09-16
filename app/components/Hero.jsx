import Image from "next/image"

Image
const Hero = () => {
    return (
        <>
            <main className="h-screen">
                <div className="bg-[url('/cover/The-Start-up.jpg')] h-full w-full bg-cover bg-no-repeat bg-center inset-0 top-0 -z-50 absolute"></div>
                <div className="bg-gradient-to-t from-[#28586879] h-screen absolute w-full inset-0  -z-10"></div>

                <div className="flex justify-start  flex-col relative -bottom-[200px]  w-[40rem]">
                    <div className="title">
                    <Image src='/Logos/The Start-up.png' width={800} height={1000} alt="watch" />
                    </div>
                    <h2 className="text-xl text-[#f0f0f0]  h-[5rem] overflow-hidden  mt-5">
                        Just testing the white color on the gradient color for  now white color on the gradient color fe gradient color for now white color on the gradient color for now white color on the gre gradient color for now white color 
                    </h2>
                    <div className="flex justify-start gap-4 mt-5">
                        <button className="btn border flex items-center bg-[#b82727] border-none h-[60px] w-[200px] px-[24px] justify-center gap-2 ">
                            <Image src='/Brand/play-circle.png' width={24} height={24} alt="watch" />
                            <p>Watch Now</p>
                        </button>
                        <button className="btn border flex items-center bg-[#80808067] border-none hover:bg-[#2a2f30bd]  h-[60px] w-[250px] px-[24px] justify-center gap-2">
                            <Image src='/Brand/add-circle.png' width={24} height={24} alt="watch" />
                            <p>Add to Wishlist</p>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Hero