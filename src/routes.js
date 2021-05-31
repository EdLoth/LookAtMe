import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

//Importing pages to assign routes
import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';
import Contact from './Pages/Contact';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/Works" component={Works} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}