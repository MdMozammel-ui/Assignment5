function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 font-bold">
                &lt;/&gt;
              </div>

              <span className="text-xl font-bold">
                Dev Stack
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Discover powerful technologies and build the perfect developer
              stack for your next project.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm hover:bg-gray-700"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm hover:bg-gray-700"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm hover:bg-gray-700"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold">Product</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#technologies" className="hover:text-white">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  Our Mission
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold">Legal</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;