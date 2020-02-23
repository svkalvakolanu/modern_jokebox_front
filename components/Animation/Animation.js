import React from "react";

function Animation() {
  return (
    <div className="animation-container">
      <div className="red-div"></div>
      <style jsx>
        {`
          .red-div {
            background-color: red;
            height: 100px;
            width: 100px;
            animation: test 10s infinite;
            -moz-animation: test 10s infinite;
            -webkit-animation: test 10s infinite;
          }
          @-webkit-keyframes test {
            0% {
              background-color: white;
            }
            10% {
              background-color: blue;
            }
            50% {
              background-color: green;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Animation;
