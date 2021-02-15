import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
