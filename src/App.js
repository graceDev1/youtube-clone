import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Recommanded from "./components/pages/Recommanded";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // BEM CLASS NAMIN CONVENTION
  return (
    <div className="App">
      {/* header */}

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="app_page">
              {/* sider */}
              <Sidebar />
              <Recommanded />
              {/* recommandations */}
            </div>
          </Route>
          <Route exact path="/search">
            <h1> search Page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
