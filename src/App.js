import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Views
import Home from "./Pages/Home/Home"
import MoreInfo from './Pages/MoreInfo/MoreInfo';

//Styles
import './App.css';


function App() {
  
  

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        
        <Route path="/:city/:id" exact>
          <MoreInfo />
        </Route>

        <Route path="*">
          <h2>Not found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;
