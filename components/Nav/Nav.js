import React from "react";
import SimpleMode from "../SimpleMode/SimpleMode";

function Nav(props) {
  return (
    <div className="navigation">
      <div className="nav fs" onClick={() => props.toggleFullScreen()}>
        {props.fs ? <a>Full Screen Mode</a> : <a>Full Screen Mode</a>}
      </div>
      <div className="nav vis" onClick={() => props.updateVisualizer()}>
        {props.visualizer ? (
          <a>Beta Music Visualizer (On)</a>
        ) : (
          <a>Beta Music Visualizer (Off)</a>
        )}
      </div>
      <div className="nav share">
        <a
          href="https://twitter.com/intent/tweet?url=http://vibrmusic.herokuapp.com/&text=🔥I%27m%20discovering%20some%20dope%20new%20artists%20from%20all%20around%20the%20world%20at%20Vibr%20-%20it%27s%20the%20wave! 🌊🌊🌊"
          target="_blank"
        >
          Share
        </a>
      </div>
      <div className="nav remix" onClick={() => props.toggleRemixModal()}>
        <a>Remix</a>
      </div>
      <SimpleMode
        visualizer={props.visualizer}
        toggleSimple={props.toggleSimple}
      />
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
        .nav {
          text-align: center;
          font-family: "Questrial";
          padding: 0;
          cursor: pointer;
        }
        .fs {
          grid-column: 2;
        }
        .vis {
          grid-column: 3;
        }
        .share {
          grid-column: 4;
        }
        .remix {
          grid-column: 5;
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
          display: grid;
          margin-left: 26%;
          width: 70%;
          grid-template-columns: 0.5fr 2.5fr 3.5fr 1.5fr 1.5fr;
          grid-template-rows: 1fr 1fr;
          margin-top: 4%;
        }
      `}</style>
    </div>
  );
}

export default Nav;
