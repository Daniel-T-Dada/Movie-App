'use client'
import Image from "next/image"
import { movieData } from "../data";
import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { slides } from '../slides';

const Hero = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const handleAutoplayTimeLeft = (swiper, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    return (
        <>
            <main className="h-screen hero">
                {/* Background Image */}
                <div className="h-screen w-full bg-cover bg-no-repeat bg-center inset-0 top-0 -z-50 absolute">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={handleAutoplayTimeLeft}
                        className="mySwiper absolute h-screen w-full"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={`/cover/${slide}`}
                                    alt={slide.replace(/_/g, ' ').replace('.jpg', '')}
                                    width={800}
                                    height={900}
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </SwiperSlide>
                        ))}

                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                        
                        </div>
                    </Swiper>
                </div>

                {/* Content Section */}
                <div className="flex justify-start lg:justify-start left-30 top-[190px] sm:left-0 flex-col relative -bottom-[100px] sm:top-[79px] sm:-bottom-[150px] lg:-left-60 lg:top-[200px]  w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45rem] mx-auto ">

                    <div className="title">
                        <Image src='/Logos/The Start-up.png' width={1000} height={800} alt="watch" className="w-[50%] sm:w-[100%] sm:pb-14 lg:w-[100%]" />
                    </div>

                    <h2 className="text-base sm:text-xl lg:text-xl text-[#f0f0f0] h-auto overflow-hidden mt-2 sm:mt-16 lg:mt-0">
                        Just testing the white color on the gradient color for now white color on the gradient color for now...
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-start gap-4 mt-5">
                        <button className="btn border flex items-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-none h-[50px] sm:h-[60px] w-full sm:w-[200px] px-5 justify-center gap-2">
                            <Image src='/Brand/play-circle.png' width={24} height={24} alt="watch" />
                            <p>Watch Now</p>
                        </button>
                        <button className="btn border flex items-center bg-[#80808067] border-none hover:bg-[#2a2f30bd] h-[50px] sm:h-[60px] w-full sm:w-[250px] px-5 justify-center gap-2">
                            <Image src='/Brand/add-circle.png' width={24} height={24} alt="watch" />
                            <p>Add to Wishlist</p>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Hero;
