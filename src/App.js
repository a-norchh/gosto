import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Header, Footer } from "./components";
import { Home } from "./components/pages";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
