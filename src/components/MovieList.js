import { useEffect, useState } from "react"
import { watchlistWhiteIcon } from "../assets/icons";

export const MovieList = () => {
    const [movies, setMovies] = useState(null)
    let firstMovie;
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch("http://www.omdbapi.com/?apikey=1de0ebd&s=tom")
            const jsonData = await res.json()
            setMovies(jsonData)
            firstMovie = jsonData.Search[0]
        }
        fetchMovies()
    }, [])

    return <div className="mt-8 grid grid-cols-5 gap-20">
        {movies?.Search && movies.Search.map((movie) => {
            return (
                <div className="border rounded">
                    <div className="absolute w-16 h-16 z-10">
                        <img className="" src={watchlistWhiteIcon} alt="Collection Icon" />
                    </div>
                    <img className="h-[310px] object-cover" src={movie.Poster} alt="Movie Poster" />
                    <div className="bg-gray-50 py-2">
                            {movie.Title}
                            <br />
                            ({movie.Year})
                    </div>
                </div>)
        })
        }
    </div>
}