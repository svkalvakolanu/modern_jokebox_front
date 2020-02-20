import React from "react";
import Overlay from "../Overlay/Overlay";
import YouTube from "react-youtube";

function Player(props) {
  let playFirstVideo = event => {
    event.target.playVideoAt(props.currentSong);
    event.target.playVideo();
  };
  let playerStateChange = event => {
    switch (event.data) {
      case 0:
        props.advanceSong();
        break;
      case -1:
        event.target.playVideo();
    }
  };

  let vID = props.playList[props.currentSong]["video-link"].substring(30);

  const opts = {
    height: "965px",
    width: "100%",
    playerVars: {
      controls: "0",
      showInfo: "0",
      rel: "0"
    }
  };

  return (
    <div className="p-container">
      <Overlay
        advanceSong={props.advanceSong}
        prevSong={props.prevSong}
        songData={props.playList[props.currentSong]}
        toggleRemixModal={props.toggleRemixModal}
        toggleAboutModal={props.toggleAboutModal}
        currentSong={props.currentSong}
      />
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
      <style jsx>{`
        .p-container {
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default Player;
