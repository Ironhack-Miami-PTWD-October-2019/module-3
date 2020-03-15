import React from 'react';

class StudentsList extends React.Component {
  // ✅ state is always object
  state = {
    students: ['kevin', 'kayla', 'vero', 'gustavo']
  };

  render() {
    const { students } = this.state;
    return (
      <>
        <ul>
          {students.map((student, index) => {
            return <li key={index}>{student}</li>;
          })}

          {/* {students.map((student, index) => <li key={index}>{student}</li>)} */}
        </ul>
      </>
    );
  }
}

export default StudentsList;
