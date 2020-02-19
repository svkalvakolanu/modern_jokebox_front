import React from "react";
import Buttons from "../Buttons/Buttons";
import SongDetail from "../SongDetail/SongDetail";
import Overlay from "../Overlay/Overlay"

function Player(props) {
  return (
    <div className="p-container">
      <Overlay
        advanceSong={props.advanceSong}
        prevSong={props.prevSong}
        songData={props.playList[props.currentSong]}
        toggleRemixModal={props.toggleRemixModal}
      />
      <iframe
        className="player"
        src={props.playList[props.currentSong]["video-link"]}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        id="player"
      ></iframe>
      <style jsx>{`
        .p-container {
          height: 100vh;
        }
        .player {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default Player;
