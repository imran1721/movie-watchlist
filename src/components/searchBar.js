import { useDispatch } from "react-redux"
import { searchIcon } from "../assets/icons"
import { useState } from "react"
import { fetchMovies } from "./asyncActions"
import { search } from "./watchlistSlice"

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(search(searchQuery))
        dispatch(fetchMovies(searchQuery))
    }

    return (<div className="rounded mt-16">
        <form onSubmit={handleSubmit} className="mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <img className="w-6 h-6 text-gray-500" src={searchIcon} />
                </div>
                <input type="search" onChange={(e)=> setSearchQuery(e.target.value)} className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary/50 focus:border-primary/50 focus:outline-none" placeholder="Search Mockups, Logos..." required />
                <button type="submit" className="text-white absolute end-0 bottom-0 bg-primary hover:bg-primary/90 rounded-lg text-sm px-8 h-full">Search</button>
            </div>
        </form>
    </div>)
}
