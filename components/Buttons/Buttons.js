import React from "react";
import previousanalog from "../images/PreviousAnlg.png"
import playanalog from "../images/PlayAnlg.png";
import pauseanalog from "../images/PauseAnlg.png";
import skipanalog from "../images/SkipAnlg.png";

function Buttons(props) {
  return (
    <div className="buttons">
      <ul>
        <li
          className={"show " + (props.currentSong ? "" : "fade")}
          onClick={() => props.prevSong()}
        >
          <img src={previousanalog} alt="previous" />
        </li>
        <li onClick={props.playPause}>
          <img src={(props.isPlaying === 1 ? pauseanalog: playanalog)} alt="apple-music" />
        </li>
        <li onClick={() => props.advanceSong()}>
          <img src={skipanalog} alt="skip" />
        </li>
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
        img {
          width: 30px;
          height: 30px;
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
