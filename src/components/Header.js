import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-blue-400 text-white border flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">Wann Website</h1>
      <Navbar />
    </header>
  );
}

export default Header;
