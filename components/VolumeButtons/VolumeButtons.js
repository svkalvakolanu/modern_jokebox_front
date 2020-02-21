import React from "react";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

function VolumeButtons(props) {
  return (
    <div className="volume-buttons">
      <h2 id="minus" onClick={props.decreaseVolume}>
        -
      </h2>
      <h2>{props.volume}</h2>
      <h2 id="plus" onClick={props.increaseVolume}>
        +
      </h2>
    </div>
  );
}

export default VolumeButtons;
