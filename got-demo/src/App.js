import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      {/* <Home /> */}
      <main className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
