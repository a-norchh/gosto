import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./controllers/store";
import { Provider } from "react-redux";

import { Header } from "./components/sections";
import { Home, Blog, Product } from "./components/pages";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product/:prodId" element={<Product />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
