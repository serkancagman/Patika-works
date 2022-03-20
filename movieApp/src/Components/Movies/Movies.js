import React from "react";
import MovieBox from "./MovieBox";
import style from "./style/Movies.module.css";
import movieIcon from "../../assets/movie.png";
import {MovieContext} from "../context/MovieContext";
import animation from "../../assets/notfound.json";
import Lottie from "lottie-react";
const Movies = () => {
    const { movies, loading,searched,searchQuery } = React.useContext(MovieContext);
  return (
    <section className={style.mainSection}>
      <div className="container">
        <div className={`d-flex justify-content-start align-items-center ${style.movieHeaderWrapper}`}>
        {searched ? (
          <>
          <h1 className={style.mainSectionTitle}>Search Results "{searchQuery}"</h1>
          <img src={movieIcon} className={style.movieLogo}/>
          </>
        ):(
          <>
          <h1 className={style.mainSectionTitle}>Popular Movies</h1>
          <img src={movieIcon} className={style.movieLogo}/>
          </> )}
        </div>
       
        <div className="row g-3 align-items-center">
            { movies.length > 0 ? movies.map((movie) => <MovieBox isLoading={loading} key={movie.id} movie={movie} />) :
            (<div className={style.notFound}> <Lottie animationData={animation} loop={true} /></div> )}
        </div>
      </div>
    </section>
  );
};

export default Movies;
