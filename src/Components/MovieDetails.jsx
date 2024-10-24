import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../AppContext/AppContext.jsx";

const MovieDetails = () => {
  const { id } = useParams(); 
  const { movies } = useContext(MovieContext); 

  
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div className="text-white">Movie not found</div>;
  }

  return (
    <div className="flex p-4 bg-gray-900 rounded-lg shadow-lg">
      <img
        src={movie.img}
        alt={movie.title}
        className="w-80 h-auto object-cover rounded-lg" 
      />
      <div className="ml-6 flex flex-col justify-center">
        {" "}
        {/* Aligns the text to the center vertically */}
        <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
        <p className="text-gray-400 mt-2">Release Date: {movie.release}</p>
        <p className="text-yellow-400 mt-1">Rating: {movie.rating}</p>
        {/* You can add more details about the movie here */}
      </div>
    </div>
  );
};

export default MovieDetails;
