import WatchedMovie from "./WatchedMovie";
import List from "./List";
import { memo } from "react";
const WatchedMoviesList = ({ watched }) => {
  return (
    <List
      data={watched}
      renderItem={(movie) => <WatchedMovie movie={movie} key={movie.imdbID} />}
    />
  );
};

export default memo(WatchedMoviesList);
