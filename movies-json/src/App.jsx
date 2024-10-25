import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import movieService from "./services/movies";
import Notification from "./components/Notification";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState(null);

  const filteredList = showAll ? movies : movies.filter((m) => m.watchList);
  // const moviesData = axios.get("http://localhost:3001/movies");
  // console.log(moviesData);

  useEffect(() => {
    // axios.get("http://localhost:3001/movies").then((res) => {
    //   setMovies(res.data);
    // });
    movieService.getMovies().then((data) => setMovies(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovieObj = {
      title: movieName,
      watchList: false,
      year: releaseYear,
    };
    movieService.addMovie(newMovieObj).then((data) => {
      setMovies(movies.concat(data));
    });
    // axios.post("http://localhost:3001/movies", newMovieObj).then((res) => {
    //   setMovies(movies.concat(res.data));
    // });
    // setMovieList([...movieList, newMovieObj]);
    // setMovies(movies.concat(newMovieObj));
    setMovieName("");
    setReleaseYear("");
    // console.log("New Object: ", newMovieObj);
  };

  const updateMovie = (movie) => {
    const updatedMovie = { ...movie, watchList: !movie.watchList };
    // axios
    //   .put(`http://localhost:3001/movies/${movie.id}`, updatedMovie)
    //   .then((res) =>
    //     setMovies(movies.map((m) => (m.id !== res.data.id ? m : res.data)))
    //   );
    movieService
      .updateMovie(updatedMovie)
      .then((data) => {
        setMovies(movies.map((m) => (m.id !== data.id ? m : data)));
      })
      .catch((e) => {
        console.log("Error: ", e);
        setNotification(
          `The movie "${movie.title}" is already removed from the server`
        );
        setTimeout(() => {
          setNotification(null);
        }, 5000);
        // alert(`The movie "${movie.title}" is already removed from the server`);
        setMovies(movies.filter((m) => m.id !== movie.id));
      });
  };

  const handleChange = (e) => {
    setMovieName(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <h1>Movies Application</h1>
      <Notification notification={notification} />
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={movieName}
          onChange={handleChange}
          placeholder="Movie Name"
        />
        <input
          placeholder="Release Year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Watchlist Only" : "Show All Movies"}
      </button>
      {showAll ? <h2>All Movies</h2> : <h2>Your Watchlist</h2>}
      {filteredList.map((movie) => {
        return <Movie key={movie.id} movie={movie} updateMovie={updateMovie} />;
      })}
    </div>
  );
};

export default App;
