import Image from "next/image"
import Link from "next/link";
import { FaStar } from "react-icons/fa"
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { castMembers } from "../artist";
import { movieData } from "../data";

const Card = () => {
    const sortedMovies = movieData.sort((a, b) => b.rating - a.rating)

    const truncateText = (text, numWords) => {
        const words = text.split(' ');
        if (words.length > numWords) {
            return `${words.slice(0, numWords).join(' ')}...`;
        }
        return text;
    }

    return (
        <>

            <div className="movielists grid grid-cols-3 gap-32">
                {sortedMovies.map((movie, index) => (
                    <div className="card" key={index}>
                        <div className="poster">
                            <Image
                                src={`/images/${movie.pics}`} // Use the dynamic `pics` value from the data array
                                width={320}
                                height={450}
                                alt={movie.title}
                                className="card-img"
                            />
                        </div>

                        <div className="details">
                            <Image
                                src={`/Logos/${movie.title}.png`} // This is optional, if you have corresponding logos
                                width={170}
                                height={50}
                                className="mb-2"
                                alt={movie.title}
                            />
                            {/* <h3 className="text-[0.8em] mb-0">{movie.title}</h3> */}
                            <h3 className="text-[0.8em] mb-0">Directed by Bong Joon-ho</h3>

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

                            <div className="info text-[0.8em] mt-[20px]">
                                <p className="epilogue">
                                    {truncateText(movie.epilogue, 30)}
                                </p>
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
                )).slice(0, 3)}
            </div>

            <div className="seeMore flex justify-center m-28">
                <Link href={'/movies'} className='flex items-center justify-center my-5'>
                    <span className="btn flex justify-center items-center bg-transparent hover:ring-blue-500 hover:bg-[#00bfff3b] rounded-full ring-2">See more</span>
                </Link>
            </div>



        </>
    )


}
export default Card