import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JokesMain from "./components/JokesMain";
import MoviesMain from "./components/MoviesMain";
import MovieDisplay from "./components/MovieDisplay";
import AnimeMain from "./components/AnimeMain";
import AnimeDisplay from "./components/AnimeDisplay";
import MangaDisplay from "./components/MangaDisplay";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<JokesMain />}></Route>
          <Route path="/jokes" element={<JokesMain />}></Route>
          <Route path="/movies" element={<MoviesMain />}></Route>
          <Route path="/movies/:id" element={<MovieDisplay />}></Route>
          <Route path="/anime" element={<AnimeMain />}></Route>
          <Route path="/anime/:id" element={<AnimeDisplay />}></Route>
          <Route path="/manga/:id" element={<MangaDisplay />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
