import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';

import Title from './components/Title/Title';
import StudentsList from './components/StudentsList/StudentsList';

import ProductsList from './components/ProductsList/ProductsList';

function App() {
  return (
    <div className='App'>
      <Header>
        <Title theTitle='Remote class' />
        <Title subtitle='March 2020' />
        <Title theTitle='React is ok!' subtitle='03/14/2020' />
      </Header>
      <section>
        <StudentsList />
      </section>

      <section>
        <ProductsList />
      </section>
    </div>
  );
}

export default App;
