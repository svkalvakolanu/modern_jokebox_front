import React from "react";

function Links() {
  return (
    <div className="links">
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
        .links {
          margin: 5%;
          top: 5%;
        }
      `}</style>
    </div>
  );
}

export default Links;
