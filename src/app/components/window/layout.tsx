import appList from "../../constants/appList";
import Window from "./Window";

export default function WindowLayout() {
  return (
    <>
      {appList.map((appData) => (
        <Window
          key={appData.appName}
          src={`/icons/${appData.appName}Icon.svg`}
          alt={`${appData.appName} Icon`}
          appName={appData.appName}
          url={appData.url}
        />
      ))}
    </>
  );
}
