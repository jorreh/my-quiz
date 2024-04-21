import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import clsx from "clsx";

// import { CSSTransition } from "react-transition-group";
import Button from "../components/ui/button/Button";
import InfoPanel from "../components/info-panel/InfoPanel";

import { MainLayoutStyle } from "./MainLayout.styles";

export default function MainLayout() {
  const quizRef = React.useRef<HTMLDivElement | null>(null);

  const [infoPanelVisible, setInfoPanelVisible] = useState(false); // todo - initial state depends on media query

  function togglePanel() {
    if (quizRef.current) {
      quizRef.current.classList.toggle("hidden-mobile");
      setInfoPanelVisible((prev) => {
        return !prev;
      });
    }
  }

  return (
    <MainLayoutStyle>
      <Button
        handleClick={togglePanel}
        toggleBtn={true}
        icon={infoPanelVisible ? "close.svg" : "burger.svg"}
        classNames={"btn-toggle"}
      ></Button>

      <div className="info-col hidden-mobile" ref={quizRef}>
        <InfoPanel />
      </div>

      <div className={clsx("quiz-col", infoPanelVisible && "scroll-locked")}>
        <Outlet />
      </div>
    </MainLayoutStyle>
  );
}
