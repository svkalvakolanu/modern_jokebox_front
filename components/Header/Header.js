import React from "react";
import Links from "../Links/Links";
import Identity from "../Identity/Identity";
import Nav from "../Nav/Nav";
import SimpleMode from "../SimpleMode/SimpleMode";

function Header(props) {
  return (
    <div>
      <div className="header">
        <Links className="links" songData={props.songData} />
        <Identity className="identity" />
        <Nav
          className="nav"
          updatePlayList={props.updatePlayList}
          toggleRemixModal={props.toggleRemixModal}
          toggleFullScreen={props.toggleFullScreen}
          fs={props.fs}
          updateVisualizer={props.updateVisualizer}
          visualizer={props.visualizer}
        />
      </div>
      <SimpleMode visualizer={props.visualizer} toggleSimple={props.toggleSimple}/>
      <style jsx>{`
        .header {
          display: grid;
          width: 100vw;
          grid-template-columns: 3fr 1fr 3fr;
          margin-bottom: 0;
        }
        .links {
          grid-column: 1;
        }
        .identity {
          grid-column: 2;
        }
        .nav {
          grid-column: 3;
        }
      `}</style>
    </div>
  );
}

export default Header;
