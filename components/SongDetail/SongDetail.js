import React from "react";

function SongDetail(props) {
  return (
    <div className="SongDetail">
      <h2>{props.songData.title}</h2>
      <h3>{props.songData.artist}</h3>
      <h4>{props.songData.album}</h4>
      <p>{props.songData.year}</p>
      <style jsx>{``}</style>
    </div>
  );
}

export default SongDetail;
