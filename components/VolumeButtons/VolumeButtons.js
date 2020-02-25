import React from "react";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const VolumeButtons = (props) => {
  return (
    <div className="volume-buttons">
      <h2>
        <span
          id="minus"
          className={props.volume ? "" : "fade"}
          onClick={props.decreaseVolume}
        >
          -
        </span>
        {props.volume}{" "}
        <span
          id="plus"
          className={props.volume === 100 ? "fade" : ""}
          onClick={props.increaseVolume}
        >
          +
        </span>
      </h2>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
        h2 {
          font-family: "Questrial";
        }
        #minus {
          padding-right: 20px;
          cursor: pointer;
        }
        #plus {
          padding-left: 15px;
          cursor: pointer;
        }
        .fade {
          opacity: 0.1;
        }
        .volume-buttons {
          position: fixed;
          bottom: 5%;
          left: 11%;
          width: 20%;
        }
      `}</style>
    </div>
  );
}

export default VolumeButtons;
