import React, { useRef, useState } from "react";
import Overlay from "../Overlay/Overlay";
import YouTube from "react-youtube";
import RemixModal from "../RemixModal/RemixModal";

function Player(props) {
  const [isPlaying, setPlaying] = useState(-1);
  const [playerTarget, setTarget] = useState({});

  let playFirstVideo = event => {
    console.log(props.display);
    if (!props.display) {
      event.target.playVideoAt(props.currentSong);
    }
  };

  let playerStateChange = event => {
    if (event.data === 0) {
      props.advanceSong();

      //   break;
      // case -1:
      //   event.target.playVideo();
    } else if (event.data === -1 && !props.display) {
      event.target.playVideo();
    }
    setPlaying(event.data);
    setTarget(event.target);
  };

  console.log(isPlaying);

  let playPause = () => {
    if (isPlaying === 1 && !props.display) {
      playerTarget.pauseVideo();
    } else if (isPlaying === 2 || isPlaying === 5) {
      playerTarget.playVideo();
    }
  };

  let vID = props.playList[props.currentSong]["video-link"].substring(30);

  const opts = {
    height: "940px",
    width: "100%",
    playerVars: {
      controls: "0",
      showInfo: "0",
      rel: "0",
      autoplay: "true"
    }
  };

  return (
    <div className="p-container">
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
      />
      <style jsx>{`
        .p-container {
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default Player;
