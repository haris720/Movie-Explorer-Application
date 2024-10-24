
import React, { createContext, useState, useEffect } from "react";
import moviesData from "../data.js";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    const fetchMovies = () => {
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
