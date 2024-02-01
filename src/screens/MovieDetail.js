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
    Input,
} from "@material-tailwind/react";
import { bookMovie } from '../store/actions/movies';
import ModalWrapper from '../components/ModalWrapper';


const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movies = useSelector(state => state?.movies?.movies)

    const [movie, setMovie] = useState([])
    const [onBook, setOnBook] = useState(false)

    const selectedMovie = movies?.find((movie) => movie?.show?.id === Number(id))

    useEffect(() => {
        if (selectedMovie) {
            setMovie(selectedMovie?.show)
        }
    }, [movies])

    const rating = movie?.rating?.average ? Math.trunc((movie?.rating?.average / 2)) : null

    return (
        <div className='relative flex justify-center p-5 pt-20 pb-10 lg:p-20 bg-black text-white min-h-screen' >
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
                    <div dangerouslySetInnerHTML={{ __html: movie?.summary }} />
                    <div className="flex flex-wrap space-x-2 mt-5" >
                        {movie?.genres?.map(e => (
                            <Chip key={e} color="gray" value={e} />
                        ))}
                    </div>
                </CardBody>
                <Button onClick={() => setOnBook(true)} className='w-fit mx-auto' size='lg' >Book Now</Button>
            </Card>
            {onBook && (
                <ModalWrapper setModal={setOnBook} >
                    <Card className='p-10' color="blue-gray" shadow={false}>
                        <Typography variant="h4" color="blue-gray">
                            Book  "{movie?.name}""
                        </Typography>
                        <Typography color="black" className="mt-1 font-normal">
                            Nice to meet you! Please confirm your booking.
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Movie Name
                                </Typography>
                                <Input
                                    size="lg"
                                    disabled={true}
                                    value={movie?.name}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Language
                                </Typography>
                                <Input
                                    size="lg"
                                    disabled={true}
                                    value={movie?.language}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <div className='text-black' >
                                    <p>Days: {movie?.schedule?.days}</p>
                                    <p>Time: {movie?.schedule?.time}</p>
                                </div>
                            </div>

                            <Button onClick={() => dispatch(bookMovie(movie), setOnBook(false))} className="mt-6" fullWidth>
                                Book Now
                            </Button>
                        </form>
                    </Card>
                </ModalWrapper>
            )}
        </div>
    )
}

export default MovieDetail
