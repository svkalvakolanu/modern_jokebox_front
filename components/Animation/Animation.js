import React from "react";
import Layout from "../Layout/Layout";

function Animation() {
  const divArray = [];

  for (let i = 0; i < 100; i++) {
    divArray.push(<div className="red-div jsx-2466937096"></div>);
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
            grid-template-rows: repeat (40, 200px);
            grid-template-columns: repeat (40, 200px);
            margin: 0;
            padding: 0;
            width: 100%;
          }
          .red-div {
            background-color: red;
            display: inline-block;
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
