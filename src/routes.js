import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './App';
import Sector from './components/Sector';

export default() => {
  return (
         <BrowserRouter>
           <Switch>
             <Route exact path='/' component={App} />
             <Route exact path='/sector' component={Sector} />
           </Switch>
         </BrowserRouter>
         )
}
