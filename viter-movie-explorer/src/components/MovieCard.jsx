import React from "react";

const MovieCard = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="w-full h-72 object-cover"
          />
          <div className="p-4">
            <h2 className="text-base font-semibold mb-1">{movie.title}</h2>

            <div className="flex items-center text-sm text-gray-600 mb-2 space-x-2">
              <span className="bg-yellow-400 text-black font-semibold px-2 py-0.5 rounded">
                {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
              </span>
              <span>
                {movie.release_date
                  ? new Date(movie.release_date).getFullYear()
                  : "Unknown"}
              </span>
            </div>

            <p className="text-sm text-gray-700 line-clamp-2">
              {movie.overview || "No description available."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
