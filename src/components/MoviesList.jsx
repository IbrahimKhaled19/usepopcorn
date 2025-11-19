import Movie from "./Movie";
import List from "./List";
function MoviesList({ movies }) {
  return (
    <List
      data={movies}
      renderItem={(movie) => <Movie movie={movie} key={movie.imdbID} />}
    />
  );
}
export default MoviesList;
