import React from 'react';

const Header = props => {
  console.log('this is props: ', props);
  //   return <h1> Welcome to my first create react app! </h1>;
  return (
    <header>
      <h1> {props.title} </h1>
      <h3> {props.subtitle} </h3>{' '}
      {/* if we don't pass a prop from the parent down, no error will appear, it will just leave an empty spot */}
      <p>This is the Header component. 💆‍♀️</p>
    </header>
  );
};

//  ✅✅✅ DESTRUCTURE THE PROPS ✅✅✅
//                          ^
//                          |
// const Header = ({ textToPassDown }) => {
//   return (
//     <header>
//       <h1> {textToPassDown} </h1>
//     </header>
//   );
// };

export default Header;
