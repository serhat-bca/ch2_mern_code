import Movie from "./components/Movie";

const App = ({ movies }) => {
  return (
    <div>
      <h1>Movies App</h1>
      {/* <ul>
        <li>{movies[0].title}</li>
        <li>{movies[1].title}</li>
        <li>{movies[2].title}</li>
      </ul> */}
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default App;
