import React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    student: {
      name: 'marcos',
      age: 32
    }
  };

  getYearOlder = () => {
    this.setState(prevState => {
      return {
        student: {
          ...prevState.student,
          age: prevState.student.age + 1
        }
      };
    });
  };

  render() {
    return (
      <MyContext.Provider value={{ ...this.state, getYearOlder: this.getYearOlder }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };

// const user = {
//     name: 'sandra'
// }

// const user2 = {
//     ...user,
//     lastname: 'boskovic'
// }
