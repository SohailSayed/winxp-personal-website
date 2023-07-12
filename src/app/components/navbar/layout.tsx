import Navbar from "./Navbar";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Navbar>{children}</Navbar>;
}
