import React from "react";

function Buttons(props) {
  return (
    <div className="buttons">
      <ul>
        <li
          className={"show " + (props.currentSong ? "" : "fade")}
          onClick={() => props.prevSong()}
        >
          Previous
        </li>
        <li onClick={props.playPause}>Play/Pause</li>
        <li onClick={() => props.advanceSong()}>Skip</li>
      </ul>
      <style jsx>{`
        .buttons {
          position: fixed;
          bottom: 5%;
          width: 100%;
          text-align: center;
        }
        ul {
          list-style-type: none;
          overflow: hidden;
          display: inline-block;
        }
        li {
          float: left;
          padding: 0 20px 0 0;
          color: white;
        }
        li:hover {
          opacity: 0.6;
        }
        .fade {
          color: grey;
        }
        .navigation {
          height: 2vh;
          margin-top: 4vh;
        }
      `}</style>
    </div>
  );
}

export default Buttons;
