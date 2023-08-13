import React from "react";
import appList from "../../constants/appList";
import Window from "./Window";

export default function WindowLayout() {
  return (
    <>
      {appList.map((appData) => (
        <Window
          key={appData.appName}
          src={appData.src}
          alt={`${appData.appName} Icon`}
          appName={appData.appName}
          url={appData.url}
        />
      ))}
    </>
  );
}
