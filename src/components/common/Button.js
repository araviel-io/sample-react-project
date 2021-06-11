import React from 'react';

function Button(props) {
    return (
      <button className="button" onClick={props.handleClick}>
        {props.btnText}
      </button>
    );
   }

export default Button;