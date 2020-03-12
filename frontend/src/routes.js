import React from "react";
import { Switch, Route } from "react-router-dom";

import main from "../src/Pages/Main/index";
import create from "../src/Pages/Create/index";
import query from "../src/Pages/Query/index";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={main} />
      <Route path="/create" component={create} />
      <Route path="/query" component={query} />
    </Switch>
  );
}

export default Routes;
