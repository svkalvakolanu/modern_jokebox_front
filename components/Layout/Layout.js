import React from "react";

const Layout = props => (
  <div>
    {props.children}
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Layout;
