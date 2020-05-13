import React from "react";
import { Home } from "./Components/Home";
import { Food } from "./Components/Food";
import { Stay } from "./Components/Stay";
import { Visit } from "./Components/Visit.js";
import { Nightlife } from "./Components/Nightlife.js";
import { Activities } from "./Components/Activities.js";
import { Stores } from "./Components/Stores.js";
import { Contact } from "./Components/Contact.js";

import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/food" component={Food} />
      <Route path="/stay" component={Stay} />
      <Route path="/visit" component={Visit} />
      <Route path="/nightlife" component={Nightlife} />
      <Route path="/activities" component={Activities} />
      <Route path="/stores" component={Stores} />
      <Route path="/contactus" component={Contact} />
    </div>
  );
}

export default App;
