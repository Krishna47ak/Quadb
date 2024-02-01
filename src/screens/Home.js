import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import NavbarHeader from "../components/Navbar"
import MovieCard from "../components/MovieCard"
import { Spinner } from "@material-tailwind/react"


const Home = () => {
    const { movies, loading } = useSelector(state => state?.movies)
    const [searchText, setSearchtext] = useState("")
    const [searchData, setSearchData] = useState(movies)

    const search = (movies, searchText) => {
        const filteredData = movies.filter((movie) => (
            (movie?.show?.name?.toLocaleLowerCase()?.includes(searchText.toLocaleLowerCase()))
        ))
        return filteredData
    }

    useEffect(() => {
        if (searchText) {
            const filteredData = search(movies, searchText)
            setSearchData(filteredData)
        } else {
            setSearchData(movies)
        }
    }, [searchText, movies])



    return (
        <div className='bg-black text-white min-h-screen' >
            <NavbarHeader value={searchText} onChange={setSearchtext} />
            {loading ? (
                <div className="flex h-[85vh] justify-center items-center" >
                    <Spinner className="h-20 w-20" color="blue" />
                </div>
            ) :
                <div className="grid lg:grid-cols-2 gap-y-7 lg:gap-7 p-10 md:p-16" >
                    {searchData?.map((movie) => (
                        <MovieCard key={movie?.show?.id} id={movie?.show?.id} img={movie?.show?.image?.original} name={movie?.show?.name} description={movie?.show?.summary} genres={movie?.show?.genres} />
                    ))}
                </div>}
        </div>
    )
}

export default Home