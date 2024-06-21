import { homeIcon, optionsIcon, searchIcon, userIcon } from "../assets/icons"


export const Sidebar = () => {
    return (
        <div className="h-screen pt-8 px-6 w-full">
            <div className="text-4xl font-bold text-primary mb-8">
                Watchlists
            </div>
            <div className="pb-8 border-b-2 border-gray-200">
                <form className="pb-10">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <img className="w-6 h-6 text-gray-500" src={searchIcon} />
                        </div>
                        <input type="search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary/50 focus:border-primary/50 focus:outline-none" placeholder="Search" required />
                    </div>
                </form>
                <button className="flex py-2 px-2 bg-primary w-full rounded text-white"><div className="inline-flex align-middle"><img className="w-6 h-6 mr-2 text-gray-500" src={homeIcon} />Home</div></button>
            </div>
            <div className="flex pl-2 pt-4">
                My Lists
            </div>
            <div className="flex justify-between fixed bottom-[30px] border rounded bottom-90 w-[15%] items-center">
                <div className="flex items-center"><img className="my-1 ml-1 mr-2 w-6 h-6" src={userIcon} />Guest</div>
                <div className="mr-2"><img className="my-1 ml-1 mr-2 w-6 h-6" src={optionsIcon} /></div>
            </div>
        </div>
    )
}