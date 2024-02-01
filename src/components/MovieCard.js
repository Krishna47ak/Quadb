import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, img, name, description, genres }) => {
    return (
        <Card className="w-full md:flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 md:w-2/5 shrink-0 rounded-b-none md:rounded-r-none"
            >
                <img
                    src={img}
                    alt="Movie image not found"
                    className="h-full w-full object-cover hover:scale-110 duration-500"
                />
            </CardHeader>
            <CardBody className="flex flex-col" >
                <Typography variant="h4" color="blue-gray" className="mb-2 my-auto">
                    {name}
                </Typography>
                <div className="flex flex-wrap space-x-2" >
                    {genres?.map(e => (
                        <Chip color="gray" value={e} />
                    ))}
                </div>

                {/* <Typography color="gray" className="mb-3 md:mb-8 font-normal">
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </Typography> */}
                <Link to={`/${id}`} className="inline-block mt-auto">
                    <Button variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </Link>
            </CardBody>
        </Card>
    )
}

export default MovieCard