import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Movie from "./MovieDetail/Movie";
import MovieList from "./MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route  path="movie/:id" element={<Movie />} />
          <Route  path="movies/:type" element={<MovieList />} />
          <Route  path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
