import React from "react";

const SimpleMode = props => {
    if(props.visualizer){
        return (
          <div>
            <a>Simple Mode</a>
            <style jsx>{`
              @import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
              div {
                text-align: right;
              }
              a {
                padding-right: 11%;
                margin-top: -200px;
                font-family: "Questrial";
              }
            `}</style>
          </div>
        );
    } else {
        return null
    }
}

export default SimpleMode;
