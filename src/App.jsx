import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./content/data";
export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(data.tempMovieData);
  const [watched, setWatched] = useState(data.tempWatchedData);
  return (
    <>
      <Navbar movies={movies} query={query} setQuery={setQuery} />
      <Main movies={movies} watched={watched} />
    </>
  );
}
