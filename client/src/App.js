import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

const App = () => {
  const Scroll = () => {
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", Scroll, true);
    return () => {
      window.removeEventListener("scroll", Scroll);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
