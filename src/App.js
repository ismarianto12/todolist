import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './components/Home';
import { AddUser } from '/components/AddUser';
import { EditUser } from './components/EditUser';


export default class App extends React{
    render() {
   return (

  <div className="App">
  <Router>
  <h1>Nanvbar</h1>
  <Switch> 
   <Home />
   <AddUser />
   <EditUser />
   </Switch>
   </Router>
</div>
   );

   }

}