import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {
    Card,
    CardBody,
    Typography,
    Button,
    Chip,
    Rating,
} from "@material-tailwind/react";
import { bookMovie } from '../store/actions/movies';


const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movies = useSelector(state => state?.movies?.movies)

    const [movie, setMovie] = useState([])

    const selectedMovie = movies?.find((movie) => movie?.show?.id === Number(id))

    useEffect(() => {
        if (selectedMovie) {
            setMovie(selectedMovie?.show)
        }
    }, [movies])

    const rating = Math.trunc((movie?.rating?.average / 2))

    return (
        <div className=' relative flex justify-center p-5 pt-20 pb-10 lg:p-20 bg-black text-white min-h-screen' >
            <Link to="/" className='fixed left-7 top-7 bg-white hover:bg-gray-400 p-2 px-5 text-black rounded-l-full select-none cursor-pointer z-50' >Go Back</Link>
            <Card className="bg-gray-400 w-[90%] h-fit pb-3 md:pb-7 max-w-full overflow-hidden">
                <img
                    src={movie?.image?.original}
                    alt="ui/ux review check"
                    className='object-cover h-[30vh] md:h-[50vh]'
                />
                {rating && (
                    <div className='absolute right-5 md:right-10 top-5' >
                        <Rating value={rating} readonly />
                    </div>
                )}
                <CardBody className='md:p-10' >
                    <Typography variant="h4" color="blue-gray">
                        {movie?.name || ''}
                    </Typography>
                    <Typography variant="h6" color="current" className="my-1">
                        {movie?.language || ''}
                    </Typography>
                    <Typography color="gray" className="mb-3 md:mb-8 font-normal">
                        <div dangerouslySetInnerHTML={{ __html: movie?.summary }} />
                    </Typography>
                    <div className="flex flex-wrap space-x-2" >
                        {movie?.genres?.map(e => (
                            <Chip key={e} color="gray" value={e} />
                        ))}
                    </div>
                </CardBody>
                <Button onClick={() => dispatch(bookMovie(movie))} className='w-fit mx-auto' size='lg' >Book Now</Button>
            </Card>
        </div>
    )
}

export default MovieDetail
