import { Link } from "react-router-dom";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  return (
    <nav className="px-4 w-full flex items-center py-5 top-0 bg-transparent">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex nav-hover-btn items-center gap-2 text-white group relative font-semibold font-general uppercase"
        >
          {/* Copyright symbol */}
          <div className="transition-transform duration-700 group-hover:rotate-[360deg]">
            ©
          </div>

          {/* Wrapper to hold both texts in same spot */}
          <div className="relative w-32 h-6 overflow-hidden">
            {/* Code by Ese (default visible) */}
            <div className="absolute inset-0 transition-all duration-700 group-hover:-translate-x-10 group-hover:opacity-0">
              Code by Ese
            </div>

            {/* Ebikeme Ese (default hidden, slides in) */}
            <div className="absolute inset-0 translate-x-10 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100">
              Ebikeme Ese
            </div>
          </div>
        </Link>

        {/* Navlinks always visible */}
        <div className="flex h-full items-center font-semibold">
          <div className="flex gap-1">
            {navLinks.map((nav) => (
              <a
                className="nav-hover-btn lg:ms-6 xl:ms-6 md:ms-4 ms-1"
                key={nav.id}
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
