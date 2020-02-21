import React from "react";
import applemusic from "../images/applemusic.png"
import spotify from "../images/spotify.png"
import tidal from "../images/tidal.png";

function Links() {
  return (
    <div className="links">
      <ul>
        <li>
          <img src={applemusic} alt="apple-music" />
        </li>
        <li>
          <img src={spotify} alt="spotify" />
        </li>
        <li>
          <img src={tidal} alt="tidal" />
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
        }
        img {
          height: 30px;
          width: 30px;
        }
        a:hover {
          opacity: 0.6;
        }
        .links {
          margin: 5%;
          top: 5%;
        }
      `}</style>
    </div>
  );
}

export default Links;
