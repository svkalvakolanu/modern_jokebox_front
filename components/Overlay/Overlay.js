import React from "react";
import SongDetail from "../SongDetail/SongDetail";
import Buttons from "../Buttons/Buttons";
import Header from "../Header/Header";

const Overlay = props => {
  return (
    <div className="modal" id="overlay-display">
      <div id="overlay-content">
        <Header
          toggleRemixModal={props.toggleRemixModal}
          toggleAboutModal={props.toggleAboutModal}
        />
        <SongDetail songData={props.songData} />
        <Buttons
          advanceSong={props.advanceSong}
          prevSong={props.prevSong}
          playPause={props.playPause}
          currentSong={props.currentSong}
        />
      </div>

      <style jsx>{`
        .modal {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 1;
          overflow: auto;
        }

        #overlay-content {
          opacity: 0;
          -webkit-transition: all 5s ease-in;
          -moz-transition: all 5s ease-in;
          -moz-transition: all 5s ease-in
          -ms-transition: all 5s ease-in;
          -ms-transition: all 5s ease-in;
          -o-transition: all 5s ease-in;
          -o-transition: all 5s ease-in;
          transition: all 5s ease-in;
          transition: all 5s ease-in;
          color: white;
           background-color: RGBA(0,0,0,.01)
           cursor: pointer;
        }
        #overlay-content:hover {
          opacity: 1;
          display: block;
          transition: all 800ms ease-out;
        }
      `}</style>
    </div>
  );
};

export default Overlay;
