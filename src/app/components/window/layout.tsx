import appList from "../../constants/appList";
import Window from "./Window";

export default function WindowLayout() {
  return (
    <>
      {appList.map((appName) => (
        <Window
          key={appName}
          src={`/icons/${appName}Icon.svg`}
          alt={`${appName} Icon`}
          appName={appName}
        />
      ))}
    </>
  );
}
