import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  // const moviesData = axios.get("http://localhost:3001/movies");
  // console.log(moviesData);

  useEffect(() => {
    axios.get("http://localhost:3001/movies").then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Movies Application</h1>
      {movies.map((m) => (
        <p key={m.id}>{m.title}</p>
      ))}
    </div>
  );
};

export default App;
