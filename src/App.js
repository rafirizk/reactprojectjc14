import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
