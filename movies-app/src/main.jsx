import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const movies = [
  { id: 1, title: "The Godfather", watchList: true },
  { id: 2, title: "The Shawshank Redemption", watchList: false },
  { id: 3, title: "The Lord of The Rings", watchList: true },
];

createRoot(document.getElementById("root")).render(<App movies={movies} />);
