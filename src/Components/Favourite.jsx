import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { MovieContext } from "../AppContext/AppContext.jsx"; 

const Favourite = ({ searchQuery }) => {
  const { movies } = useContext(MovieContext); 
  const [filteredFavoriteMovies, setFilteredFavoriteMovies] = useState([]); 

  useEffect(() => {
    
    const favoriteMovies = movies.filter((movie) => movie.fav === true);

    
    const updatedFilteredFavoriteMovies = favoriteMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredFavoriteMovies(updatedFilteredFavoriteMovies); 
  }, [searchQuery, movies]); 

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-white mb-4">Favorite Movies</h1>

      {filteredFavoriteMovies.length === 0 ? (
        <p className="text-gray-400">No favorite movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredFavoriteMovies.map((movie) => (
            <Link
              to={`/movies/${movie.id}`} 
              key={movie.id}
              className="no-underline"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-white">
                    {movie.title}
                  </h2>
                  <p className="text-gray-400">Release Date: {movie.release}</p>
                  <p className="text-yellow-400">Rating: {movie.rating}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourite;
