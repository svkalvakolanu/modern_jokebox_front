import React from "react";
import applemusic from "../images/applemusic.png"
import spotify from "../images/spotify.png"
import tidal from "../images/tidal.png";

function Links(props) {
  return (
    <div className="links">
      <ul>
        <li>
          <a href={props.songData["apple-music-link"]} target="_blank">
            <img src={applemusic} alt="apple-music" />
          </a>
        </li>
        <li>
          <a href={props.songData["spotify-link"]} target="_blank">
            <img src={spotify} alt="spotify" />
          </a>
        </li>
        <li>
          <a href={props.songData["tidal-link"]} target="_blank">
            <img src={tidal} alt="tidal" />
          </a>
        </li>
      </ul>

      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          overflow: hidden;
          float: left;
        }
        li {
          float: left;
          padding: 0 20px 0 0;
          cursor: pointer;
        }
        img {
          height: 30px;
          width: 30px;
        }
        a:hover {
          opacity: 0.6;
        }
        .links {
          margin: 3%;
          top: 3%;
        }
      `}</style>
    </div>
  );
}

export default Links;
