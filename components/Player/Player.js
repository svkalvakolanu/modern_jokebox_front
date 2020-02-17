import React from "react";
import Buttons from "../Buttons/Buttons";
import SongDetail from "../SongDetail/SongDetail";

function Player(props) {
  return (
    <div className="Player">
      <iframe
        width="560"
        height="315"
        src={props.songList[props.currentSong]["video-link"]}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        id="player"
      ></iframe>
      <Buttons advanceSong={props.advanceSong} prevSong={props.prevSong}/>
      <SongDetail songData={props.songList[props.currentSong]} />
      <style jsx>{``}</style>
    </div>
  );
}

export default Player;
