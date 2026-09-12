function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-lg font-bold text-white">
            &lt;/&gt;
          </div>

          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
            Dev Stack
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-pink-500">
            Home
          </a>

          <a href="#technologies" className="text-sm font-medium text-gray-700 hover:text-pink-500">
            Technologies
          </a>

          <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-pink-500">
            Projects
          </a>

          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-pink-500">
            About
          </a>

          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center gap-3 md:hidden">
          <button className="text-2xl text-gray-700">
            ☰
          </button>

          <button className="text-sm font-medium text-gray-700">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;