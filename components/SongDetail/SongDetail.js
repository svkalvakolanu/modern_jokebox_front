import React from "react";

function SongDetail(props) {
  return (
    <div className="song-detail">
      <h2>{props.songData.title}</h2>
      <h2>{props.songData.artist}</h2>
      <h4>{props.songData.album}</h4>
      <h4>{props.songData.year}</h4>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");

        .song-detail {
          color: white;
          position: fixed;
          font-family: "Questrial";
          text-align: right;
          right: 8%;
          bottom: 11%;
        }
      `}</style>
    </div>
  );
}

export default SongDetail;
