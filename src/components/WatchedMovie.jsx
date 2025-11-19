import MovieCard from "./MovieCard";
const WatchedMovie = ({ movie }) => {
  return (
    <MovieCard movie={movie}>
      <p>
        <span>⭐️</span>
        <span>{movie.imdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{movie.userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{movie.runtime} min</span>
      </p>
    </MovieCard>
  );
};

export default WatchedMovie;
