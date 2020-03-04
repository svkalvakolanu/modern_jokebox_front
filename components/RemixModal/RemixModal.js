import React, { useState, useEffect } from "react";
import Identity from "../Identity/Identity";

const RemixModal = props => {
  const [afternoonDrive, setAfternoonDrive] = useState(false);
  const [international, setInternational] = useState(false);
  const [focus, setFocus] = useState(false);
  const [chill, setChill] = useState(false);
  const [dance, setDance] = useState(false);
  const [wavy, setWavy] = useState(false);
  const [hardcore, setHardcore] = useState(false);
  const [bliss2, setBliss2] = useState(false);
  const [motivation, setMotivation] = useState(false);
  const [hype, setHype] = useState(false);
  const [freshAndNew, setFreshAndNew] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    updateAct();
  });

  const updateAct = () => {
    if (
      afternoonDrive ||
      international ||
      focus ||
      chill ||
      dance ||
      wavy ||
      bliss2 ||
      hype ||
      motivation ||
      freshAndNew ||
      hardcore
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const updateAfternoonDrive = () => {
    let update = !afternoonDrive;
    setAfternoonDrive(update);
    props.updateActive("Afternoon Drive");
  };

  const updateInternational = () => {
    let update = !international;
    setInternational(update);
    props.updateActive("International");
  };

  const updateFocus = () => {
    let update = !focus;
    setFocus(update);
    props.updateActive("Focus");
  };

  const updateHype = () => {
    let update = !hype;
    setHype(update);
    props.updateActive("Hype");
  };

  const updateChill = () => {
    let update = !chill;
    setChill(update);
    props.updateActive("Chill");
  };

  const updateDance = () => {
    let update = !dance;
    setDance(update);
    props.updateActive("Dance");
  };

  const updateWavy = () => {
    let update = !wavy;
    setWavy(update);
    props.updateActive("Wavy");
  };

  const updateMotivation = () => {
    let update = !motivation;
    setMotivation(update);
    props.updateActive("Motivation");
  };

  const updateHardcore = () => {
    let update = !hardcore;
    setHardcore(update);
    props.updateActive("Hardcore");
  };

    const updateFreshAndNew = () => {
      let update = !freshAndNew;
      setFreshAndNew(update);
      props.updateActive("Fresh And New");
    };

  const updateBliss2 = () => {
    let update = !bliss2;
    setBliss2(update);
    props.updateActive("Bliss 2");
  };

  //   class Playlist {
  //       constructor(variableName, updateFunction) {
  //         this.variableName = variableName
  //         this.updateFunction = updateFunction
  //         const [variableName, updateFunction] = useState(false)
  //       }
  //       updateState() {
  //       }
  //   }

  return (
    <div className={"modal " + (props.display ? "playlists" : "none")}>
      <Identity />
      <h4>
        Vibr is a video-first music discovery platform. Made by JV and SK.
      </h4>
      <h5>
        Roll the dice for random videos or select your mood(s) below and Remix.
      </h5>
      <div className="playlist-container">
        <div
          className={"playlist " + (freshAndNew ? "selected" : "regular")}
          onClick={() => updateFreshAndNew()}
        >
          <h4>Fresh and New</h4>
        </div>
        <div
          className={"playlist " + (afternoonDrive ? "selected" : "regular")}
          onClick={() => updateAfternoonDrive()}
        >
          <h4>Afternoon Drive</h4>
        </div>
        <div
          className={"playlist " + (international ? "selected" : "regular")}
          onClick={() => updateInternational()}
        >
          <h4>International</h4>
        </div>
        <div
          className={"playlist " + (focus ? "selected" : "regular")}
          onClick={() => updateFocus()}
        >
          <h4>Focus</h4>
        </div>
        <div
          className={"playlist " + (chill ? "selected" : "regular")}
          onClick={() => updateChill()}
        >
          <h4>Chill</h4>
        </div>
        <div
          className={"playlist " + (dance ? "selected" : "regular")}
          onClick={() => updateDance()}
        >
          <h4>Dance</h4>
        </div>
        <div
          className={"playlist " + (wavy ? "selected" : "regular")}
          onClick={() => updateWavy()}
        >
          <h4>Wavy</h4>
        </div>
        <div
          className={"playlist " + (motivation ? "selected" : "regular")}
          onClick={() => updateMotivation()}
        >
          <h4>Motivation</h4>
        </div>
        <div
          className={"playlist " + (hardcore ? "selected" : "regular")}
          onClick={() => updateHardcore()}
        >
          <h4>Hardcore</h4>
        </div>
        <div
          className={"playlist " + (bliss2 ? "selected" : "regular")}
          onClick={() => updateBliss2()}
        >
          <h4>Bliss 2</h4>
        </div>
        <div
          className={"playlist " + (hype ? "selected" : "regular")}
          onClick={() => updateHype()}
        >
          <h4>Hype</h4>
        </div>
      </div>

      <div className="modal-footer">
        <div
          className={"modal-buttons " + (active ? "" : "no-click")}
          id="remix"
          onClick={() => {
            props.updateDisplay();
            props.filterList();
            props.playPause();
          }}
        >
          Remix
        </div>
        <div
          className="modal-buttons"
          id="roll"
          onClick={() => {
            props.updateDisplay();
            props.playPause();
          }}
        >
          Roll The Dice
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
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
        }
        .playlist-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          min-height: 150px;
        }
        .playlists {
          z-index: 3;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
        }
        h4 {
          display: inline-block;
          vertical-align: middle;
          height: 25px;
          margin-top: 57.5px;
        }

        .playlist {
          text-align: center;
          width: 140px;
          height: 140px;
          background: #181818;
          color: white;
          margin: 10px;
        }
        .regular {
          border: 2px solid white;
        }
        .selected {
          border: 2px solid orange;
        }
        .modal-footer {
          align-content: center;
          margin-top: 50px;
          bottom: 0;
          height: 100px;
        }

        .modal-buttons {
          color: white;
          display: inline-block;
          cursor: pointer;
          border: solid white 2px;
          padding: 10px;
          bottom: 10px;
        }
        #remix {
          margin-right: 50px;
        }

        .none {
          display: none;
        }
        .no-click {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RemixModal;
