import React from "react";

function Animation() {
  return (
    <div className="animation-container">
      <div className="red-div"></div>
      <div className="blue-div"></div>
      <div className="green-div"></div>
      <div className="white-div"></div>
      <div className="yellow-div"></div>
      <style jsx>
        {`
          .animation-container {
            display: grid;
            grid-template-rows: repeat (10, 1fr);
            grid-template-columns: repeat (10, 1fr);
          }
          .red-div {
            background-color: red;
            height: 100px;
            width: 100px;
            animation: test 10s infinite;
          }
          @keyframes test {
            0% {
              background-color: blue;
            }
            10% {
              background-color: white;
            }
            50% {
              background-color: green;
            }
          }
          .blue-div {
            background-color: red;
            height: 100px;
            width: 100px;
            animation: test2 10s infinite;
          }
          @keyframes test2 {
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
          .green-div {
            background-color: green;
            height: 100px;
            width: 100px;
            animation: test3 10s infinite;
          }
          @keyframes test3 {
            0% {
              background-color: white;
            }
            10% {
              background-color: blue;
            }
            50% {
              background-color: red;
            }
          }
          .white-div {
            background-color: white;
            height: 100px;
            width: 100px;
            animation: test4 10s infinite;
          }
          @keyframes test4 {
            0% {
              background-color: yellow;
            }
            10% {
              background-color: blue;
            }
            50% {
              background-color: green;
            }
          }
          .yellow-div {
            background-color: yellow;
            height: 100px;
            width: 100px;
            animation: test5 10s infinite;
          }
          @keyframes test5 {
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
