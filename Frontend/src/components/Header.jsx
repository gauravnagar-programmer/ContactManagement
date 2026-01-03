import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({className }) => {
  
  const [mobileNav, setMobileNav] = useState(false);
  

  const handleMobileNav = () => {
    setMobileNav((prev) => !prev);
  };

  return (
    <nav
      className={`py-3 text-white flex items-center pb-7 justify-between ${className} `}
    >
      <h1 className="text-2xl font-bold cursor-pointer">
        <Link to="/">ContactX</Link>
      </h1>

      <div className=" hidden md:flex items-center gap-20 mr-10  font-semibold justify-between">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/contacts/data">Contract</Link>
        </p>
        <p>
          <Link to="">About</Link>
        </p>
      </div>
      
      {/* navigation of mobile */}
      <div className="md:hidden relative">
  {/* Menu Button */}
  <button
    onClick={handleMobileNav}
    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label="Toggle menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  </button>

  {/* Dropdown */}
  <div
    className={`absolute right-0 mt-2 w-40 rounded-lg bg-white text-black shadow-lg ring-1 ring-black/10 transition-all duration-200 ${
      mobileNav ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
    }`}
  >
    <Link
      to="/"
      className="block px-4 py-2 text-sm hover:bg-gray-100"
      onClick={handleMobileNav}
    >
      Home
    </Link>
    <Link
      to="/contacts/data"
      className="block px-4 py-2 text-sm border-t hover:bg-gray-100"
      onClick={handleMobileNav}
    >
      Contact
    </Link>
  </div>
</div>

    </nav>
  );
};
export default Header;
