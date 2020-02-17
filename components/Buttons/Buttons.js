import React from "react";

function Buttons(props) {
  return (
    <div className="buttons">
      <ul>
        <li onClick={() => props.prevSong()}>Previous</li>
        <li>Play/Pause</li>
        <li onClick={() => props.advanceSong()}>Skip</li>
      </ul>
      <style jsx>{``}</style>
    </div>
  );
}

export default Buttons;
