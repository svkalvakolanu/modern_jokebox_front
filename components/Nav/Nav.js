import React from "react";

function Nav(props) {
  return (
    <div className="Nav">
      <ul>
        <li>About</li>
        <li>Share</li>
        <li onClick={() => props.filterList(["Rap", "R&B"], ["USA", "UK"])}>
          Remix
        </li>
      </ul>
      <style jsx>{``}</style>
    </div>
  );
}

export default Nav;
