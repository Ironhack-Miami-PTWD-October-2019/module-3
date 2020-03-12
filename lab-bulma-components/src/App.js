import React from 'react';
import Navbar from './navbar/Navbar';
import Signup from './signup/Signup';
import Message from './message/Message';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Signup />
      <Message />
    </div>
  );
};

export default App;
