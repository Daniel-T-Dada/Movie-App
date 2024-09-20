'use client'
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import { castMembers } from "../artist";
import { movieData } from "../data";
import { useContext } from 'react';
import { SearchContext } from '../SearchContext';

const Card = () => {
    const { searchTerm } = useContext(SearchContext);
    const sortedMovies = movieData.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.category.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => b.rating - a.rating);

    return (
        <>
            {/* Responsive grid layout */}
            <div className="movielists grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 gap-8 lg:gap-16 justify-center items-center px-[40px]">
                {sortedMovies.map((movie, index) => (
                    <Link href={`/movies/${String(movie.title).toLowerCase().split(' ').join('-')}`} title={movie.title} key={index} passHref>
                        <div className="card" key={index}>
                            <div className="poster">
                                {/* Responsive image */}
                                <Image
                                    src={`/images/${movie.pics}`}
                                    width={320}
                                    height={450}
                                    alt={movie.title}
                                    className="card-img object-cover"
                                />
                            </div>

                            <div className="details mt-4">
                                {/* Movie Logo */}
                                <Image
                                    src={`/Logos/${movie.title}.png`}
                                    width={170}
                                    height={50}
                                    className="mb-2"
                                    alt={movie.title}
                                />
                                <h3 className="text-sm sm:text-md mb-1">Directed by {movie.director}</h3>

                                {/* Rating */}
                                <div className="rating flex items-center text-[#f7f406]">
                                    <FaStar className="text-sm sm:text-lg" />
                                    {Array(Math.floor(movie.rating)).fill().map((_, index) => (
                                        <FaStar key={index} className="text-sm sm:text-lg" />
                                    ))}
                                    {Array(5 - Math.floor(movie.rating)).fill().map((_, index) => (
                                        <FaRegStar key={index} className="text-sm sm:text-lg" />
                                    ))}
                                    <span className="py-0 px-0 text-white ml-2 sm:ml-4">{movie.rating}/5</span>
                                </div>

                                {/* Categories */}
                                <div className="tags relative mt-2">
                                    {movie.category.split(', ').sort((a, b) => a === 'Horror' ? 1 : b === 'Horror' ? -1 : a.localeCompare(b)).map((genre, idx) => (
                                        <span key={idx} className={`py-1 px-2 rounded mr-2 text-xs sm:text-sm ${genre === 'Horror' ? 'bg-[#ff5722]' : 'bg-[#03a8f5]'
                                            }`}>{genre}</span>
                                    ))}
                                </div>

                                <div className="cast">
                                    <h4 className="mt-4 text-sm sm:text-md">Cast</h4>
                                    <ul className="card-list flex mt-2 sm:mt-4 gap-4">
                                        {castMembers.map((member) => (
                                            <li key={member.name}>
                                                <Image
                                                    src={member.src}
                                                    width={40}
                                                    height={40}
                                                    alt={member.artist}
                                                    className="rounded-full"
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Link>
                )).slice(0, 3)}
            </div>

            {/* See More Button */}
            <div className="seeMore flex justify-center mt-12 sm:mt-20">
                <Link href={'/movies'} className='flex items-center justify-center my-5'>
                    <span className="btn flex justify-center items-center bg-transparent hover:ring-blue-500 hover:bg-[#00bfff3b] rounded-full ring-2 py-2 px-6 sm:py-3 sm:px-8 text-sm sm:text-md">
                        See more
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Card;
