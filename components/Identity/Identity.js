import React from "react";

function Identity() {
  return (
    <div className="identity">
      <h1 id="vibr">VIBR</h1>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
        .identity {
          text-align: center;
          font-family: "Questrial";
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
