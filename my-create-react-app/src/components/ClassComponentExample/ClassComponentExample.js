import React, { Component } from 'react';
import Counter from '../Counter/Counter';

// STATE CAN LIVE ONLY INSIDE CLASS COMPONENT
// later when you learn about hooks you will see that this is not 100% true, but for now take it as truthy

class ClassComponentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: 'ana',
        lastName: 'martinez'
      }
    };
  }

  //   state = {
  //     user: {
  //       firstName: 'ana',
  //       lastName: 'martinez'
  //     }
  //   };

  getFullName = () => {
    const { firstName, lastName } = this.state.user;
    return (
      <p>
        This is my name generated through the function call: {firstName[0].toUpperCase() + firstName.slice(1)}{' '}
        {lastName[0].toUpperCase() + lastName.slice(1)}
      </p>
    );
  };

  render() {
    const { firstName, lastName } = this.state.user;

    return (
      <div>
        <h5> I am a class component example! 🥁🥁🥁 </h5>
        <p>
          {/* My name is : {this.state.user.firstName} {this.state.user.lastName} */}
          My name is : {firstName} {lastName}
        </p>
        {this.getFullName()}
        <Counter />
      </div>
    );
  }
}

export default ClassComponentExample;
