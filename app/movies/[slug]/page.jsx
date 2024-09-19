import Image from 'next/image';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { movieData } from '../../data';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import Link from 'next/link';

const slugify = (title) => {
    return title.toLowerCase().split(' ').join('-');  // Convert spaces to dashes and lowercase
};

const MovieDetails = ({ params }) => {
    const { slug } = params;
    const movie = movieData.find((movie) => slugify(movie.title) === slug);

    if (!movie) {
        return <p>Movie not found</p>;
    }

    return (
        <div className="parent-details bg-gradient-to-br from-[#001133] via-[#003366] to-[#1e3a5f] h-dvh w-full px-12 pt-6 pb-12 rounded-3xl my-8">
            <button className='bg-[#001C54] p-4 mb-6  hover:bg-orange-800 rounded-full flex justify-center items-center pr-6 shadow-xl'>
                <Link href={'/movies'}>
                    <ArrowBackRoundedIcon /> Back
                </Link>
            </button>
            <div className="grandparent flex gap-24">
                <div className="card-details relative">
                    <Image
                        src={`/images/${movie.pics}`}
                        width={320}
                        height={450}
                        alt={movie.title}
                        className="movie-poster rounded-3xl"
                    />
                    <div className=" hidden title-overlay absolute top-[280px] left-[14px] text-center px-4 backdrop-blur-md">
                        <Image
                            src={`/logos/${movie.title}.png`}
                            width={260}
                            height={100}
                            alt={movie.title}
                            className="title-image"
                        />
                    </div>
                    <div className="thriller h-[48px] flex justify-center text-lg rounded-[30px] mt-8 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ">
                        <button>Watch Thriller</button>
                    </div>

                    <div className='icons mt-8 flex justify-around text-gray-400'>
                        <FavoriteBorderRoundedIcon className='text-[28px]' />
                        <BookmarkBorderRoundedIcon className='text-[28px]' />
                        <RemoveRedEyeOutlinedIcon className='text-[28px]' />
                    </div>
                </div>


                <div className=" border border-cyan-800  rounded-3xl p-6  w-[65%] text-slate-300">
                    <h1 className='text-6xl mb-[24px] mt-6'>{movie.title}</h1>
                    <div className='flex gap-8'>
                        <div className="h-[48px] flex justify-center items-center w-[170px] text-lg rounded-[30px] mt-8 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 gap-2 ">
                            <PlayArrowRoundedIcon />
                            Play
                        </div>

                        <div className="h-[48px] border border-cyan-500 flex justify-center hover:border-orange-800 items-center w-[170px] text-lg rounded-[30px] mt-8 gap-2">
                            <DownloadForOfflineRoundedIcon className='text-blue-500' />
                            Download
                        </div>



                    </div>

                    <div className='my-8 flex gap-16'>
                        <div className="info text-[14px] w-[70%]">
                            <p className='uppercase text-lg font-medium'>Epilogue</p>
                            <p className='leading-loose text-slate-300'>
                                {movie.epilogue}
                            </p>
                        </div>

                        <div>
                            <p className='uppercase text-lg font-medium'>Directed by</p>
                            <p className='bg-[#003366] p-6 rounded-xl mt-4'> {movie.director}</p>
                        </div>
                    </div>

                    <div className="rating flex items-center text-[#f7f406]">

                        <table className=' text-slate-300'>
                            <tbody>
                                <tr className='text-slate-500'>
                                    <td>Ratings:</td>
                                    <td>
                                        <span className="py-0 px-0 text-slate-300 ml-[10px]">{movie.rating}/5</span>
                                    </td>
                                </tr>

                                <tr className='text-slate-500'>
                                    <td>Genre:  </td>
                                    <td>
                                        <span className="py-0 px-0 text-slate-300 ml-[10px]">{movie.category}</span>
                                    </td>
                                </tr>
                                <tr className='text-slate-500'>
                                    <td>Duration:  </td>
                                    <td>
                                        <span className="py-0 px-0 text-slate-300 ml-[10px]">{movie.duration}</span>
                                    </td>
                                </tr>
                                <tr className='text-slate-500'>
                                    <td>Date Released: </td>
                                    <td>
                                        <span className="py-0 px-0 text-slate-300 ml-[10px]">{movie.datereleased}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                    </div>




                </div>
            </div>
        </div>
    );
};

// Required to pass dynamic route parameters
export async function generateStaticParams() {
    return movieData.map((movie) => ({
        slug: slugify(movie.title),
    }));
}

export default MovieDetails;
