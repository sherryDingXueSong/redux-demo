import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import More from "../pages/more";
import ScrollCase from "../pages/scroll/scroll.js";

import A from "../components/a.js";
import B from "../components/b.js";
import C from "../components/c.js";

const Routers = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route
        path="/about"
        render={() => (
          <About>
            <Route path="/about/a" exact component={A}></Route>
            <Route path="/about/b" exact component={B}></Route>
            <Route path="/about/c" exact component={C}></Route>
          </About>
        )}
      ></Route>
      {/* <Route path="/more/:userId" exact component={More}></Route> */}
      <Route path="/more" exact component={More}></Route>
      <Route path="/scroll" component={ScrollCase}></Route>
    </Switch>
  );
};

export default Routers;
