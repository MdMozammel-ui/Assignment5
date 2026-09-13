import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Desktop Navbar */}
        <div className="hidden h-20 items-center justify-between md:flex">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg brand-gradient text-lg font-bold text-white">
              &lt;/&gt;
            </div>

            <span className="brand-gradient-text text-xl font-bold">
              Dev Stack
            </span>
          </a>

          {/* Menu */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-pink-500"
            >
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-500">
              Sign In
            </button>

            <button className="rounded-full brand-gradient px-5 py-2 text-sm font-semibold text-white hover:opacity-90">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex h-16 items-center justify-between md:hidden">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Center Logo */}
          <a
            href="#"
            className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg brand-gradient text-sm font-bold text-white">
              &lt;/&gt;
            </div>

            <span className="brand-gradient-text text-lg font-bold">
              Dev Stack
            </span>
          </a>

          {/* Auth */}
          <div className="flex items-center gap-2">
            <button className="text-xs font-medium text-gray-700">
              Sign In
            </button>

            <button className="rounded-full brand-gradient px-3 py-2 text-xs font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-3">

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;