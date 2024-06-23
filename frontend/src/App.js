// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProduceList from "./components/ProduceList";
import ProduceForm from "./components/ProduceForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/add" element={<ProduceForm />} />
          <Route path="/edit/:id" element={<ProduceForm />} />
          <Route path="/" element={<ProduceList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
