import React from "react";

const Layout = props => (
  <div>
    {props.children}
    <style jsx global>{`
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        background: black;
      }
      iframe {
        display: block; /* iframes are inline by default */
        background: #000;
        border: none; /* Reset default border */
        height: 100vh /* Viewport-relative units */
        width: 100vw;
      }
    `}</style>
  </div>
);

export default Layout;
