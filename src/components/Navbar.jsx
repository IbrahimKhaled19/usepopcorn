import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

const Navbar = ({ movies, query, setQuery }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <NumResults movies={movies} />{" "}
    </nav>
  );
};

export default Navbar;
