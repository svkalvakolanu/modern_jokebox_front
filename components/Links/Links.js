import React from "react";

function Links() {
  return (
    <div className="navigation">
      <ul>
        <li>
            <a>Apple Music</a>
        </li>
        <li>
            <a>Spotify</a>
        </li>
        <li>
            <a>Tidal</a>
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
        a {
          text-decoration: none;
          color: white;
          font-size: 1em;
        }
        a:hover {
          opacity: 0.6;
        }
        .navigation {
          height: 2vh;
          margin: 4vh 0;
        }
      `}</style>
    </div>
  );
}

export default Links;
