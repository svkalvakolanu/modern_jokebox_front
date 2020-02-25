import React, { useRef, useState, useEffect } from "react";
import Overlay from "../Overlay/Overlay";
import YouTube from "react-youtube";
import RemixModal from "../RemixModal/RemixModal";

const Player = (props) => {
  const [isPlaying, setPlaying] = useState(-1);
  const [playerTarget, setTarget] = useState({});
  const [volume, changeVolume] = useState(50);

  let playFirstVideo = event => {
    if (!props.display) {
      event.target.playVideoAt(props.currentSong);
    }
  };

  let playerStateChange = event => {
    if (event.data === 0) {
      props.advanceSong();
    } else if (event.data === -1 && !props.display) {
      event.target.playVideo();
    }
    setPlaying(event.data);
    setTarget(event.target);
  };

  let playPause = () => {
    if (isPlaying === 1 && !props.display) {
      playerTarget.pauseVideo();
    } else if (isPlaying === 2 || isPlaying === 5) {
      playerTarget.playVideo();
    }
  };

  let increaseVolume = event => {
    let newVolume = volume + 10;
    if (newVolume <= 100) {
      changeVolume(newVolume);
      playerTarget.setVolume(newVolume);
    }
  };

  let decreaseVolume = event => {
    let newVolume = volume - 10;
    if (newVolume >= 0) {
      changeVolume(newVolume);
      playerTarget.setVolume(newVolume);
    }
  };

  let vID = props.playList[props.currentSong]["video-link"].substring(30);

  const opts = {
    playerVars: {
      controls: "0",
      showInfo: "0",
      rel: "0",
      autoplay: "true"
    }
  };

  return (
    <div className="p-container">
      <div className="grid-container">
        <YouTube
          className="player"
          videoId={vID}
          onReady={playFirstVideo}
          onStateChange={playerStateChange}
          opts={opts}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          id="player"
        />
      </div>
      <RemixModal
        display={props.display}
        updateDisplay={props.updateDisplay}
        updateActive={props.updateActive}
        filterList={props.filterList}
        playPause={playPause}
      />
      <Overlay
        advanceSong={props.advanceSong}
        prevSong={props.prevSong}
        playPause={playPause}
        songData={props.playList[props.currentSong]}
        toggleRemixModal={props.toggleRemixModal}
        toggleAboutModal={props.toggleAboutModal}
        currentSong={props.currentSong}
        isPlaying={isPlaying}
        decreaseVolume={decreaseVolume}
        increaseVolume={increaseVolume}
        volume={volume}
        toggleFullScreen={props.toggleFullScreen}
        fs={props.fs}
        updateVisualizer={props.updateVisualizer}
        visualizer={props.visualizer}
        toggleSimple={props.toggleSimple}
        simple={props.simple}
      />
      <style jsx>{`
        .p-container {
          height: 100%;
        }
        .player {
          grid-rows: 2 span 1;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Player;
