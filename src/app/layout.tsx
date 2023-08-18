import React from "react";
import type { Metadata } from "next";
import TaskbarLayout from "./components/taskbar/layout";
import WindowLayout from "./components/window/layout";
import { WindowContextProvider } from "./WindowContext";
import DesktopLayout from "./components/desktop/layout";
import StartLayout from "./components/start/layout";

export const metadata: Metadata = {
  title: "Sohail Sayed",
  description: "Sohails Personal Site",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body style={{ overflow: "hidden" }}>
        <WindowContextProvider>
          <DesktopLayout />
          <StartLayout />
          <WindowLayout />
          <TaskbarLayout />
        </WindowContextProvider>
      </body>
    </html>
  );
}
