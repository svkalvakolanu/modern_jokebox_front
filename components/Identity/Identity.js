import React from "react";
import mark from "../images/Identity1.png";

function Identity() {
  return (
    <div className="identity">
      <img id="vibr" src={mark} alt="VIBR Logo" />
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
        .identity {
          text-align: center;
          font-family: "Questrial";
        }
        #vibr {
          width: 120px;
          margin-top: 4%;
          margin-bottom: 0;
          display: inline-block;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default Identity;
