import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JokesMain from "./components/JokesMain";
import MoviesMain from "./components/MoviesMain";
import MovieDisplay from "./components/MovieDisplay";

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
