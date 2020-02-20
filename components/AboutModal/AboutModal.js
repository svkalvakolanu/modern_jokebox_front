import React from "react";

const AboutModal = (props) => {
  return (
    <div className={"modal " + (props.display ? "" : "none")}>
      <div className="modal-textbox">
        <h1>About</h1>
        <h4>Vibr is a video-first music discovery platform.</h4>
        <h4>Made by JV and SK</h4>
        <div className="modal-footer">
          <div
            className="modal-buttons"
            onClick={() => {
              props.updateDisplay();
            }}
          >
            Back To The Tunes
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal {
          background-color: rgba(0, 0, 0, 0.4);
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 1;
          overflow: auto;
        }
        .display {
          display: block;
        }
        .turned-off {
          display: none;
        }
        input {
          margin: 5px;
        }
        #close-update {
          float: right;
          padding: 5px 5px;
        }
        .modal-textbox {
          background-color: #444444;
          min-width: 125px;
          height: 350px;
          width: 350px;
          border-radius: 2px;
          margin: 150px auto;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
        }
        .modal-footer {
          text-align: right;
        }
        .modal-buttons {
          padding: 15px 18px;
          margin: 5px;
          background-color: white;
          border: none;
          outline: none;
          border-radius: 3px;
          color: black;
          cursor: pointer;
        }
        .none {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AboutModal;
