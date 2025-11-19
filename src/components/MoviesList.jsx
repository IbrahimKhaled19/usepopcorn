import Movie from "./Movie";
import List from "./List";
import { memo } from "react";
function MoviesList({ movies }) {
  return (
    <List
      data={movies}
      renderItem={(movie) => <Movie movie={movie} key={movie.imdbID} />}
    />
  );
}
export default memo(MoviesList);
