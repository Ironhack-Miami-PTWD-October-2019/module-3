import React from 'react';

const Title = props => {
  // this is normal JS comment

  return (
    <header>
      {/* this is something to be commented */}
      {/* this is JSX way of commenting things*/}

      {/* {if(props.theTitle && props.subtitle){
      <>
        <h1>{props.theTitle}</h1>
        <h2>{props.subtitle}</h2>
      </>
    } else if(props.theTitle ){
      <h1>{props.theTitle}</h1>
    } else {
      <h2>{props.subtitle}</h2>
    }}  */}

      {/* i tried this but it didn't work */}
      {props.theTitle && props.subtitle ? (
        <>
          <h1>{props.theTitle}</h1>
          <h2>{props.subtitle}</h2>
        </>
      ) : props.theTitle ? (
        <h1>{props.theTitle}</h1>
      ) : (
        <h2>{props.subtitle}</h2>
      )}
    </header>
  );
};

export default Title;
