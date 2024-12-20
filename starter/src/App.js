import "./App.css";
import { useState } from "react";
import AddBook from "./Components/AddBook";
import HomeBookshelf from "./Components/HomeBookshelf";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeBookshelf />} />
      <Route path="/search" element={<AddBook />} />
    </Routes>
  );
}

export default App;
