import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// We use Route in order to define the different routes of our application
import { Route, Switch } from "react-router-dom";

// We import all the components we need in our app
import Navigation from "./components/navigation";
import Create from "./components/create";
import Home from "./components/home";
import Login from "./components/login";

const App = () => {
  return (
    <div>
      <div className="App">
      <Navigation />
      <div className="Content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
        </div>
        </div>
    </div>
  );
};

export default App;