import React from "react";
import { getMovie, searchMovie } from "../../API/MovieApi";

export const MovieContext = React.createContext();

export const MovieProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [searched, setSearched] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
 
  const fetchMovies = async () => {
    setError(null);
    try {
      const response = await getMovie();
      console.log(response.results);
      setMovies(response.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const getMovieByName = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchMovie(name);
      setMovies(response.results);
      setLoading(false);
      setSearched(true);
     
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getMovieByName(searchQuery);
  }, [searchQuery]);
  React.useEffect(() => {
    fetchMovies();
  }, []);

  const values = {
    movies,
    loading,
    error,
    fetchMovies,
    setSearchQuery,
    searched,
    searchQuery,
    
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
