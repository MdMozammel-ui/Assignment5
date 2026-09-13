function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Build Your Developer Stack
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build Better.
              <span className="block brand-gradient bg-clip-text text-transparent">
                Build Smarter.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
              Discover the best technologies for modern web development.
              Explore different tools, compare technologies, and build your
              perfect developer stack.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#technologies"
                className="rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-pink-300 hover:text-pink-500"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-3xl bg-slate-100 p-4 shadow-2xl sm:p-6">

              {/* Code Editor */}
              <div className="overflow-hidden rounded-2xl bg-gray-900 shadow-xl">

                {/* Top Bar */}
                <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>

                  <span className="ml-3 text-xs text-gray-400">
                    developer-stack.jsx
                  </span>
                </div>

                {/* Code */}
                <div className="space-y-3 p-6 font-mono text-sm leading-6">
                  <p className="text-gray-500">
                    01&nbsp;&nbsp;
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">myStack</span> = {"{"}
                  </p>

                  <p className="text-gray-500">
                    02&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-pink-400">frontend</span>:{" "}
                    <span className="text-green-300">"React"</span>,
                  </p>

                  <p className="text-gray-500">
                    03&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-pink-400">backend</span>:{" "}
                    <span className="text-green-300">"Node.js"</span>,
                  </p>

                  <p className="text-gray-500">
                    04&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-pink-400">database</span>:{" "}
                    <span className="text-green-300">"MongoDB"</span>,
                  </p>

                  <p className="text-gray-500">
                    05&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-pink-400">language</span>:{" "}
                    <span className="text-green-300">"JavaScript"</span>,
                  </p>

                  <p className="text-gray-500">
                    06&nbsp;&nbsp;{"}"}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-4 top-10 hidden rounded-xl bg-white p-3 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                  ⚛
                </span>
                <div>
                  <p className="text-xs font-semibold text-gray-900">
                    React
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Frontend
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-10 hidden rounded-xl bg-white p-3 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-600">
                  JS
                </span>
                <div>
                  <p className="text-xs font-semibold text-gray-900">
                    JavaScript
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Language
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
