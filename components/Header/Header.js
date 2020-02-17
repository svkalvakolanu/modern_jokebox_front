import React from "react";
import Links from "../Links/Links";
import Identity from "../Identity/Identity";
import Nav from "../Nav/Nav";


function Header(props) {
  return (
    <div className="header">
        <Links/>
        <Identity/>
        <Nav filterList={props.filterList}/>
      <style jsx>{``}</style>
    </div>
  );
}

export default Header;
