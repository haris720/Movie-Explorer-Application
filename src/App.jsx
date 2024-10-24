import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MovieDetails from "./Components/MovieDetails";
import Favourite from "./Components/Favourite";
import Movie from "./Components/Movie";
import Footer from "./Components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-full">
      <Router>
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Movie searchQuery={searchQuery} />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route
            path="/favourite"
            element={<Favourite searchQuery={searchQuery} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
