import React from 'react';
import logo from './logo.svg';
import './App.css';

// import all the components you tend to use in this file
// These components will be the children components of the <App> component
import Header from './components/Header/Header';
import ClassComponentExample from './components/ClassComponentExample/ClassComponentExample';
import FunctionComponentExample from './components/FunctionComponentExample/FunctionComponentExample';

// Any component can be written as a function as shown below.
// Function components can receive props - imagine it as a function which can receive properties
// Just now there is a predefined word for all the properties - and that is PROPS
const App = () => {
  return (
    <main className='App'>
      <section>
        <img src={logo} className='App-logo' alt='logo' />
        <Header title='This is the props example!' />
        {/* <Header></Header> THIS IS THE SAME AS ABOVE BUT UNNECESSARY SINCE HEADER DOESN'T RECEIVE ANY CHILDREN*/}
      </section>

      <section>
        <Header title='This is the best header everrrrr!' subtitle='You know it!' />
      </section>

      <section className='container'>
        <Header title='Types of components' subtitle='Class and function components' />
        <div className='row'>
          <div className='col-md-5 back '>
            <ClassComponentExample />
          </div>
          <div className='col-md-5 offset-md-2 back'>
            <FunctionComponentExample />
          </div>
        </div>
      </section>
    </main>
  );
};

// IN CASE THIS OR ANY OTHER COMPONENT NEEDED TO HAVE ACCESS TO THE "STATE" AND LIFECYCLE METHODS (about which we will learn later),
// IT COULD BE WRITTEN AS "CLASS"

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     console.log('If you want to have access to props you have to use the "this": ', this.props);
//   }
//   render() {
//     return (
//       <>
//         <h>This is the same as above just written as a class component.</h>
//       </>
//     );
//   }
// }

export default App;
