import React from "react";
import SongDetail from "../SongDetail/SongDetail";
import Buttons from "../Buttons/Buttons";
import Header from "../Header/Header";

const Overlay = props => {
  return (
    <div className="modal">
      <Header toggleRemixModal={props.toggleRemixModal} toggleAboutModal={props.toggleAboutModal}/>
      <SongDetail songData={props.songData} />
      <Buttons advanceSong={props.advanceSong} prevSong={props.prevSong} currentSong={props.currentSong} />
      <style jsx>{`
        .modal {
          background-color: rgba(0, 0, 0, 0.2);
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 1;
          overflow: auto;
        }

        .modal:hover {
          display: block;
        }

      `}</style>
    </div>
  );
};

export default Overlay;
