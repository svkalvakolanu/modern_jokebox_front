import React from "react";
import Layout from "../Layout/Layout";

function Animation() {
  const divArray = [];
  const classNames = [
    "red-div jsx-2065550755",
    "blue-div jsx-2065550755",
    "green-div jsx-2065550755",
    "purple-div jsx-2065550755",
    "yellow-div jsx-2065550755"
  ];

  for (let i = 0; i < 10000; i++) {
    let idx = parseInt(Math.floor(Math.random() * classNames.length));
    let newClass = classNames[idx];
    divArray.push(<div className={newClass}></div>);
  }

  return (
    <div>
      <Layout>
        <div className="animation-container">
          <div>{divArray}</div>
        </div>
      </Layout>
      <style jsx>
        {`
          .animation-container {
            display: grid;
            grid-template-rows: repeat (200, 10px);
            grid-template-columns: repeat (200, 10px);
            margin: 0;
            padding: 0;
            line-height: 0;
            width: 100%;
            z-index: 1.5;
          }
          .red-div {
            background-color: red;
            display: inline-block;
            height: 10px;
            width: 10px;
            margin: 0;
            line-height: 0;
            animation: test 10s infinite;
          }
          @keyframes test {
            10% {
              background-color: blue;
            }
            30% {
              background-color: green;
            }
            50% {
              background-color: purple;
            }
            70% {
              background-color: yellow;
            }
            90% {
              background-color: red;
            }
          }
          .blue-div {
            background-color: blue;
            display: inline-block;
            height: 10px;
            width: 10px;
            margin: 0;
            line-height: 0;
            animation: test2 10s infinite;
          }
          @keyframes test2 {
            10% {
              background-color: green;
            }
            30% {
              background-color: purple;
            }
            50% {
              background-color: yellow;
            }
            70% {
              background-color: red;
            }
            90% {
              background-color: blue;
            }
          }
          .green-div {
            background-color: green;
            display: inline-block;
            height: 10px;
            width: 10px;
            margin: 0;
            line-height: 0;
            animation: test3 10s infinite;
          }
          @keyframes test3 {
            10% {
              background-color: purple;
            }
            30% {
              background-color: yellow;
            }
            50% {
              background-color: red;
            }
            70% {
              background-color: blue;
            }
            90% {
              background-color: green;
            }
          }
          .purple-div {
            background-color: purple;
            display: inline-block;
            height: 10px;
            width: 10px;
            margin: 0;
            line-height: 0;
            animation: test4 10s infinite;
          }
          @keyframes test4 {
            10% {
              background-color: yellow;
            }
            30% {
              background-color: red;
            }
            50% {
              background-color: blue;
            }
            70% {
              background-color: green;
            }
            90% {
              background-color: purple;
            }
          }
          .yellow-div {
            background-color: yellow;
            display: inline-block;
            height: 10px;
            width: 10px;
            margin: 0;
            line-height: 0;
            animation: test5 10s infinite;
          }
          @keyframes test5 {
            10% {
              background-color: red;
            }
            30% {
              background-color: blue;
            }
            50% {
              background-color: green;
            }
            70% {
              background-color: purple;
            }
            90% {
              background-color: yellow;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Animation;
