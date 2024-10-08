import Movie from "./components/Movie";

import { useState } from "react";

const App = ({ movies }) => {
  const [movieList, setMovieList] = useState(movies);
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovieObj = {
      id: Date.now(),
      title: movieName,
      watchList: false,
    };
    // setMovieList([...movieList, newMovieObj]);
    setMovieList(movieList.concat(newMovieObj));
    setMovieName("");
    // console.log("New Object: ", newMovieObj);
  };

  const handleChange = (e) => {
    setMovieName(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <h1>Movies App</h1>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input value={movieName} onChange={handleChange} />
        <button type="submit">Add Movie</button>
      </form>
      <h2>Movie List</h2>
      {movieList.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default App;
