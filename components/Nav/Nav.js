import React from "react";

function Nav(props) {
  return (
    <div className="navigation">
      <ul>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Share</a>
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
