import React from "react";

function Identity() {
  return (
    <div className="identity">
      <h1 id="vibr">VIBR</h1>
      <style jsx>{`
        .identity {
          text-align: center;
        }
        #vibr {
          margin: 7%;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

export default Identity;
