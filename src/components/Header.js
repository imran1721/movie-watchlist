import { checkIcon, watchlistIcon } from "../assets/icons"

export const Header = () => {
    return (
        <div className="border-2 border-primary rounded bg-gray-50">
            <div className="m-4 text-left">
                <div className="text-2xl">
                    Welcome to Watchlists
                </div>
                <div className="mt-8">
                    <p>Browse movies, add them to Watchlists and share them with friends.</p>
                    <p>
                        Just click the <img className="align-middle inline" width="25" src={watchlistIcon} alt="watchlist icon" /> to add a movie, click the poster to see more details or <img className="align-middle inline" width="25" src={checkIcon} alt="watchlist icon" /> to mark the movie as watched.
                    </p>
                </div>
            </div>
        </div>
    )
}
