import React from "react";
import Links from "../Links/Links";
import Identity from "../Identity/Identity";
import Nav from "../Nav/Nav";


function Header() {
  return (
    <div className="header">
        <Links/>
        <Identity/>
        <Nav/>
      <style jsx>{``}</style>
    </div>
  );
}

export default Header;
