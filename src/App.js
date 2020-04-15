import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home/homeheader/Home'
import Footer from './components/Footer.js'
import Movie from './components/individualmovie/Movie.js'
import Tv from './components/individualtv/Tv.js'
import Celebrity from './components/individualceleb/Celebrity.js'
import More from './components/more/More'


import './App.css';

function App() {
  
  
  return (
    <BrowserRouter>
      <React.Fragment >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/tv/:id" component={Tv} />
          <Route exact path="/celebrity/:id" component={Celebrity} />
          <Route exact path="/more/:id" component={More} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
   
  );
}

export default App;
