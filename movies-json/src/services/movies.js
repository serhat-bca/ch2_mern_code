import axios from "axios";

const baseURL = "http://localhost:3001/movies";

const getMovies = () => {
  return axios.get(baseURL).then((res) => res.data);
};

export default { getMovies };
