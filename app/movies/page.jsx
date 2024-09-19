'use client'
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import { castMembers } from "../artist";
import { movieData } from "../data";
import { useContext } from 'react'; // Import useContext
import { SearchContext } from '../SearchContext'; // Import SearchContext

const Page = () => {



    // Use searchTerm from the SearchContext
    const { searchTerm } = useContext(SearchContext);

    // Filter movies based on searchTerm from the context
    const filterMovies = movieData.filter((movie) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.category.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>


            <div>
                <div className="movielists grid grid-cols-3 gap-32 pt-16">
                    {filterMovies.map((movie, index) => (
                        <Link href={`/movies/${String(movie.title).toLowerCase().split(' ').join('-')}`} title={movie.title} key={index} passHref>
                            <div className="card" key={index}>
                                <div className="poster">
                                    <Image
                                        src={`/images/${movie.pics}`}
                                        width={320}
                                        height={450}
                                        alt={movie.title}
                                        className="card-img"
                                    />
                                </div>

                                <div className="details">
                                    <Image
                                        src={`/Logos/${movie.title}.png`}
                                        width={170}
                                        height={50}
                                        className="mb-2"
                                        alt={movie.title}
                                    />
                                    <div className="rating flex items-center text-[#f7f406]">
                                        <FaStar className="text-[1em]" />
                                        {Array(Math.floor(movie.rating)).fill().map((_, index) => (
                                            <FaStar key={index} className="text-[1em]" />
                                        ))}
                                        {Array(5 - Math.floor(movie.rating)).fill().map((_, index) => (
                                            <FaRegStar key={index} />
                                        ))}
                                        <span className="py-0 px-0 text-white ml-[10px]">{movie.rating}/5</span>
                                    </div>

                                    <div className="tags relative mt-[5px]">
                                        {movie.category.split(', ').sort((a, b) => a === 'Horror' ? 1 : b === 'Horror' ? -1 : a.localeCompare(b)).map((genre, idx) => (
                                            <span key={idx} className={`py-[4px] px-[8px] rounded-[4px] mr-2 ${genre === 'Horror' ? 'bg-[#ff5722]' : 'bg-[#03a8f5]'
                                                }`}>{genre}</span>
                                        ))}
                                    </div>



                                    <div className="cast">
                                        <h4 className="mt-[10px]">Cast</h4>
                                        <ul className="card-list flex relative mt-[10px] gap-[10px]">
                                            {castMembers.map((member) => (
                                                <li key={member.name}>
                                                    <Image
                                                        src={member.src}
                                                        width={40}
                                                        height={40}
                                                        alt={member.artist}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>

            </div>

        </>
    );
}
export default Page;
