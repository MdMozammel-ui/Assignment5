function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg brand-gradient text-lg font-bold text-white">
                &lt;/&gt;
              </div>

            <span className="brand-gradient-text text-xl font-bold">
                Dev Stack
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Discover modern technologies, build your perfect developer
              stack, and create better projects.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-gray-300 transition hover:bg-gray-700 hover:text-white"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-gray-300 transition hover:bg-gray-700 hover:text-white"
                aria-label="Twitter"
              >
                X
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-gray-300 transition hover:bg-gray-700 hover:text-white"
                aria-label="LinkedIn"
              >
                in
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#technologies"
                  className="text-sm text-gray-400 transition hover:text-pink-400"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-400 transition hover:text-pink-400"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-400 transition hover:text-pink-400"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-400 transition hover:text-pink-400"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-400 transition hover:text-pink-400"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-pink-400"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-pink-400"
                >
                  Privacy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-pink-400"
                >
                  Terms
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-pink-400"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-500">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-pink-400"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-pink-400"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
