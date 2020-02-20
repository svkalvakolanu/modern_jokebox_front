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
      pop
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

  //   class Playlist {
  //       constructor(variableName, updateFunction) {
  //         this.variableName = variableName
  //         this.updateFunction = updateFunction
  //         const [variableName, updateFunction] = useState(false)
  //       }
  //       updateState() {
  //         !
  //       }
  //   }

  console.log(active);

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

      <div className="modal-footer">
        <div
          className={"modal-buttons " + (active ? "" : "no-click")}
          onClick={() => {
            props.updateDisplay();
            props.filterList();
          }}
        >
          Remix
        </div>
        <div className="modal-buttons" onClick={() => props.updateDisplay()}>
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
          z-index: 1;
          overflow: auto;
        }
        .playlists {
          display: flex;
          wrap: flex-wrap;
          justify-content: space-evenly;
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
        .modal-buttons {
          color: white;
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
