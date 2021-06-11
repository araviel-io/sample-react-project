import React from 'react';

function Container(props) {
    return (
        <div className="container">
            <div className="container--content">
                <div className="container-content--top">
                    {/* // header text of the container */}
                    <h1 className="container--title">{props.containerTitle}</h1>
                </div>
                <div className="container-content--middle">
                    {/* // content can be mnemonic text to copy ( ex textbox Component) */}
                    {props.containerContent}
                </div> 
                <div className="container-content--bottom">
                    {/* can be buttons / texts (ex our </Buttons> components) */}
                    {props.containerBottom}
                </div>
            </div>
        </div>
    );
   }

export default Container;