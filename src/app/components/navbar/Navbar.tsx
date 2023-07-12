import StartButton from "./StartButton";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <StartButton />
      <p> I AM A NAVBAR I SWEAR I AM!</p>
      {children}
    </section>
  );
};

export default Navbar;
