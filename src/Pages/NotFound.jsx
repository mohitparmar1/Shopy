import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="flex flex-col md:flex-col xl:flex-row w-full mx-auto mt-20 sm:w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 px-4 py-8 sm:px-6 md:px-8 lg:px-10 rounded-3xl bg-gradient-to-b from-grey-200 to-white-300">
            <div className="flex flex-col justify-center items-center px-4 py-6 md:px-8 lg:px-2 text-gray-700">
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-Poppins">
                    404 - Not Found!
                </h1>
                <p className="text-base items-center sm:text-lg md:text-xl mt-8 mb-10 text-center">
                    Sorry! the page your are looking for was either not found or does not exist. Try refreshing the page or click the button below to go back to the home page.
                </p>
                <Link to="/"><button className="bg-blue-950 w-40 text-white px-4 py-2 rounded">Go to Home</button></Link>
            </div>

        </main>
    )
}

export default NotFound;