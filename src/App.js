import './style/index.scss';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
