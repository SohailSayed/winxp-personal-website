// This is the root layout
import type { Metadata } from "next";
import TaskbarLayout from "./components/taskbar/layout";
import BackgroundImage from "./BackgroundImage";
import WindowLayout from "./components/window/layout";
import { WindowContextProvider } from "./WindowContext";

export const metadata: Metadata = {
  title: "Personal Site",
  description: "Sohails Personal Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Put window provider over everything for now, will have to tweak this eventually for performance */}
        <WindowContextProvider>
          <BackgroundImage />
          <WindowLayout />
          <TaskbarLayout />
        </WindowContextProvider>
      </body>
    </html>
  );
}
