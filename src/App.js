
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
      <Router>
         <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/">
            
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
        </Router>
  );
}

export default App;
