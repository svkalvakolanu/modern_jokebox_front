import React from "react";

function Nav(props) {
  return (
    <div className="navigation">
      <ul>
        <ul>
          <li onClick={() => props.toggleAboutModal()}>
            <a>About</a>
          </li>
          <li>
            <a
              href="https://twitter.com/intent/tweet?url=http://vibrmusic.herokuapp.com/&text=🔥I%27m%20discovering%20some%20dope%20new%20artists%20from%20all%20around%20the%20world%20at%20Vibr%20-%20it%27s%20the%20wave! 🌊🌊🌊"
              target="_blank"
            >
              Share
            </a>
          </li>
          <li onClick={() => props.toggleRemixModal()}>
            <a>Remix</a>
          </li>
        </ul>
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          overflow: hidden;
          float: right;
        }
        li {
          float: left;
          padding: 0 20px 0 0;
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
          height: 2vh;
          margin-top: 4vh;
        }
      `}</style>
    </div>
  );
}

export default Nav;
