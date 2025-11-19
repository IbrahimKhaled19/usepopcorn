import { Calendar } from "lucide-react";
import MovieCard from "./MovieCard";
const Movie = ({ movie }) => {
  return (
    <MovieCard movie={movie}>
      <p>
        <span>
          <Calendar size={20} />
        </span>
        <span>{movie.Year}</span>
      </p>
    </MovieCard>
  );
};

export default Movie;
