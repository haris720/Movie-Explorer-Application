

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { MovieContext } from "../AppContext/AppContext.jsx";

const Movie = ({ searchQuery }) => {
  const { movies } = useContext(MovieContext); 
  const [filteredMovies, setFilteredMovies] = useState([]); 

  useEffect(() => {
    const updatedFilteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(updatedFilteredMovies); 
  }, [searchQuery, movies]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="no-underline"
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-64 object-fill"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-white">{movie.title}</h2>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center text-white">
          No movies found.
        </div>
      )}
    </div>
  );
};

export default Movie;