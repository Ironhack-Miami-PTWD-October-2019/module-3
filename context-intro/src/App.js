import React from 'react';
import './App.css';

import { MyContext } from './context';

function App() {
  // let student = {
  //   name: 'marcos',
  //   age: 32
  // };
  // return <Family name={student.name} />;

  return <Family />;
}

function Family() {
  return <Person />;
}

function Person() {
  return (
    <MyContext.Consumer>
      {context => {
        const { name, age } = context.student;
        const { getYearOlder } = context;

        return (
          <div>
            <h1>Hello, my name is {name}!!! 🎻</h1>
            <p>I am {age} years old. 🧘</p>
            <button onClick={getYearOlder}>+1 year</button>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
}

export default App;
