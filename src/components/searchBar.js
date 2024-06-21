import { searchIcon } from "../assets/icons"

export const SearchBar = () => {
    return (<div className="rounded mt-16">
        <form className="mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <img className="w-6 h-6 text-gray-500" src={searchIcon} />
                </div>
                <input type="search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary/50 focus:border-primary/50 focus:outline-none" placeholder="Search Mockups, Logos..." required />
                <button type="submit" className="text-white absolute end-0 bottom-0 bg-primary hover:bg-primary/90 rounded-lg text-sm px-8 h-full">Search</button>
            </div>
        </form>
    </div>)
}
