import React, { useState, useEffect } from "react";

const RemixModal = props => {
  const [afternoonDrive, setAfternoonDrive] = useState(false);
  const [latinFlavor, setLatinFlavor] = useState(false);
  const [focus, setFocus] = useState(false);
  const [chill, setChill] = useState(false);
  const [dance, setDance] = useState(false);
  const [wavy, setWavy] = useState(false);
  const [hardcore, setHardcore] = useState(false);
  const [oldSchool, setOldSchool] = useState(false);
  const [pop, setPop] = useState(false);
  const [motivation, setMotivation] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    updateAct();
  });

  const updateAct = () => {
    if (
      afternoonDrive ||
      latinFlavor ||
      focus ||
      chill ||
      dance ||
      wavy ||
      oldSchool ||
      pop ||
      motivation ||
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

  const updateLatinFlavor = () => {
    let update = !latinFlavor;
    setLatinFlavor(update);
    props.updateActive("Latin Flavor");
  };

  const updateFocus = () => {
    let update = !focus;
    setFocus(update);
    props.updateActive("Focus");
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
      <h1>VIBR</h1>
      <h4>Vibr is a video-first music discovery platform.</h4>
      <h4>Made by JV and SK</h4>
      <h5>
        Roll the dice for random videos or select your mood(s) below and Remix.
      </h5>
      <div className="playlist-container">
        <div
          className={"playlist " + (afternoonDrive ? "selected" : "regular")}
          onClick={() => updateAfternoonDrive()}
        >
          <h4>Afternoon Drive</h4>
        </div>
        <div
          className={"playlist " + (latinFlavor ? "selected" : "regular")}
          onClick={() => updateLatinFlavor()}
        >
          <h4>Latin Flavor</h4>
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
        }
        .playlist-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          min-height: 150px;
        }
        .playlists {
          z-index: 2;
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
