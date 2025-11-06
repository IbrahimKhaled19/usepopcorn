import { useState } from "react";
import Navbar from "./components/Navbar";
import NumResults from "./components/NumResults";
import Search from "./components/Search";
import Main from "./components/Main";
import Box from "./components/Box";
import MoviesList from "./components/MoviesList";
import Summary from "./components/Summary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import data from "./content/data";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(data.tempMovieData);
  const [watched, setWatched] = useState(data.tempWatchedData);
  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          <MoviesList movies={movies} />
        </Box>

        <Box>
          <Summary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
