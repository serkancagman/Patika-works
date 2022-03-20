import React from "react";
import style from "./style/Movies.module.css";
import Lottie from "lottie-react";
import animation from "../../assets/loading.json"
const MovieBox = ({ ItemId, movie, loading }) => {
  return (
    <div className="col-lg-3 col-6 col-md-4">
      {loading && <Lottie loop={true} animationData={animation} />}
      <div className={style.movieBox}>
        <div className={style.moviePoster}>
          <img
            className={style.moviePosterImg}
            src={`${process.env.REACT_APP_IMG_PATH}${movie.poster_path}`}
            alt="movie poster"
          />
          <div className={style.moviePosterOverlay}>
            <p className={style.moviePosterOverlayText}>{movie.overview}</p>
          </div>
        </div>
        <div className={`bg-dark ${style.movieDetails}`}>
          <h3 className={style.movieTitle}>{movie.title}</h3>
          <span
            className={
              movie.vote_average < 6
                ? style.movieRatingBad
                : style.movieRatingGood
            }
          >
            {movie.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
