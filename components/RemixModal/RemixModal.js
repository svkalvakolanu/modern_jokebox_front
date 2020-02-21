import React, { useState, useEffect } from "react";

const RemixModal = props => {
  const [afternoonDrive, setAfternoonDrive] = useState(false);
  const [latinFlavor, setLatinFlavor] = useState(false);
  const [focus, setFocus] = useState(false);
  const [chill, setChill] = useState(false);
  const [dance, setDance] = useState(false);
  const [wavy, setWavy] = useState(false);
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
      motivation
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
      <div
        className={"playlist " + (afternoonDrive ? "selected" : "regular")}
        onClick={() => updateAfternoonDrive()}
      >
        Afternoon Drive
      </div>
      <div
        className={"playlist " + (latinFlavor ? "selected" : "regular")}
        onClick={() => updateLatinFlavor()}
      >
        Latin Flavor
      </div>
      <div
        className={"playlist " + (focus ? "selected" : "regular")}
        onClick={() => updateFocus()}
      >
        Focus
      </div>
      <div
        className={"playlist " + (chill ? "selected" : "regular")}
        onClick={() => updateChill()}
      >
        Chill
      </div>
      <div
        className={"playlist " + (dance ? "selected" : "regular")}
        onClick={() => updateDance()}
      >
        Dance
      </div>
      <div
        className={"playlist " + (wavy ? "selected" : "regular")}
        onClick={() => updateWavy()}
      >
        Wavy
      </div>
      <div
        className={"playlist " + (motivation ? "selected" : "regular")}
        onClick={() => updateMotivation()}
      >
        Motivation
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
        }
        .playlists {
          display: flex;
          wrap: flex-wrap;
          justify-content: space-evenly;
          z-index: 2;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
        }
        .playlist {
          text-align: center;
          width: 175px;
          height: 175px;
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
          position: fixed;
          bottom: 0;
          height: 100px;
        }

        .modal-buttons {
          color: white;
          position: fixed;
          display: inline-block;
          cursor: pointer;
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
