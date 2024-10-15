import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [showAll, setShowAll] = useState(true);

  const filteredList = showAll ? movies : movies.filter((m) => m.watchList);
  // const moviesData = axios.get("http://localhost:3001/movies");
  // console.log(moviesData);

  useEffect(() => {
    axios.get("http://localhost:3001/movies").then((res) => {
      setMovies(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovieObj = {
      id: Date.now(),
      title: movieName,
      watchList: false,
    };
    // setMovieList([...movieList, newMovieObj]);
    setMovies(movies.concat(newMovieObj));
    setMovieName("");
    // console.log("New Object: ", newMovieObj);
  };

  const handleChange = (e) => {
    setMovieName(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <h1>Movies Application</h1>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input value={movieName} onChange={handleChange} />
        <button type="submit">Add Movie</button>
      </form>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Watchlist Only" : "Show All Movies"}
      </button>
      {showAll ? <h2>All Movies</h2> : <h2>Your Watchlist</h2>}
      {filteredList.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default App;
