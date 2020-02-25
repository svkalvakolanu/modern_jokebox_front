import React from "react";

const SimpleMode = props => {
  if (props.visualizer) {
    return (
      <div>
        <a onClick={() => props.toggleSimple()}>Simple Mode</a>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
          div {
            grid-column: 3;
            grid-row: 2;
            text-align: center;
          }
          a {
            font-family: "Questrial";
          }
        `}</style>
      </div>
    );
  } else {
    return null;
  }
};

export default SimpleMode;
