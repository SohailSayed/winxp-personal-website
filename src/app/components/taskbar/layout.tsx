import Taskbar from "./Taskbar";

export default function TaskbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <Taskbar />
    </section>
  );
}
