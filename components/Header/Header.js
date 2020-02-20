import React from "react";
import Links from "../Links/Links";
import Identity from "../Identity/Identity";
import Nav from "../Nav/Nav";


function Header(props) {
  return (
    <div className="header">
        <Links className="links"/>
        <Identity className="identity"/>
        <Nav className="nav" updatePlayList={props.updatePlayList} toggleRemixModal={props.toggleRemixModal} toggleAboutModal={props.toggleAboutModal}/>
      <style jsx>{`
      .header {
        display: grid;
        width: 100vw;
        grid-template-columns: 2fr 1fr 2fr;
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
