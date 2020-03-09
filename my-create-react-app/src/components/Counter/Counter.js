import React from 'react';
import './Counter.css';

// STATE CAN LIVE ONLY INSIDE CLASS COMPONENT
// later when you learn about hooks you will see that this is not 100% true, but for now take it as truthy

class Counter extends React.Component {
  // 1st way: using constructor and don't forget to use "this" in front of "state"
  // "constructor" => method represents the class itself, the object thats' created as an instance
  constructor() {
    // using "super" we have access to all the parent's (Component's) properties
    super();

    // ✅ state is always object ☝🏻
    this.state = {
      counter: 0
    };
  }

  // 2nd way - since we don't need access to props in this component,
  // we don't need constructor and super so we can have state as a simple object

  // state = {
  //     count: 0
  // }

  countPlus = () => {
    console.log('i am clicking');
    // this.state.count=+1; ===>> 🚨🚨🚨🚨🚨🚨🚨🚨🚨 YOU NEVER SHOULD MUTATE THE STATE.

    // to make sure state doesn't get mutated, use setState() method when updating the state
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div className='count'>
        <h2> The counter is: {this.state.counter} </h2>
        <button onClick={() => this.countPlus()}>+ count</button>
        <blockquote>I am nested component inside the ClassComponentExample!</blockquote>
      </div>
    );
  }
}

export default Counter;
