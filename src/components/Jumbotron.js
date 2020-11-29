import React from "react";
import "../styles/Jumbotron.css"

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Jumbotron;
