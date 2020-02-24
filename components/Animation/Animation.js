import React from "react";
import Layout from "../Layout/Layout";

function Animation(props) {
  const divArray = [];
  const classNames = [
    "red-div jsx-1995472711",
    "blue-div jsx-1995472711",
    "green-div jsx-1995472711",
    "purple-div jsx-1995472711",
    "yellow-div jsx-1995472711"
  ];

  for (let i = 0; i < 480; i++) {
    let idx = parseInt(Math.floor(Math.random() * classNames.length));
    let newClass = classNames[idx];
    divArray.push(<div className={newClass}></div>);
  }

  if (props.visualizer) {
    return (
      <div className="modal">
        <Layout>
          <div className="animation-container">
            <div>{divArray}</div>
          </div>
        </Layout>
        <style jsx>
          {`
            .modal {
              background-color: rgba(0, 0, 0, 1);
              position: fixed;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              color: white;
              text-align: center;
              line-height: 0.5;
              overflow: scroll;
              font-family: "Questrial";
              z-index: 1;
            }
            .animation-container {
              display: grid;
              grid-template-rows: repeat (40, 1fr);
              grid-template-columns: repeat (40, 1fr);
              margin: 0;
              padding: 0;
              line-height: 0;
              width: 100%;
              margin-top: 100px;
            }
            .red-div {
              background-color: red;
              display: inline-block;
              height: 2.5vw;
              width: 2.5vw;
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
              height: 2.5vw;
              width: 2.5vw;
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
              height: 2.5vw;
              width: 2.5vw;
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
              height: 2.5vw;
              width: 2.5vw;
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
              height: 2.5vw;
              width: 2.5vw;
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
  } else {
    return null;
  }
}

export default Animation;
