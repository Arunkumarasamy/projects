import React, { useState, useEffect } from "react";

const PageContainer = ({ ...props }) => {
  const [themeState] = useState({
    main: "default",
    sidebar: "dark",
    header: "white",
    skin: "light",
  });

  useEffect(() => {
    document.body.className = `nk-body bg-lighter npc-default has-sidebar no-touch nk-nk-theme ${
      themeState.skin === "dark" ? "dark-mode" : ""
    }`;
  }, [themeState.skin]);

  return (
    <React.Fragment>
      <div className="nk-app-root">
        <div className="nk-wrap nk-wrap-nosidebar bg-white">
          <div className="nk-content">{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PageContainer;
