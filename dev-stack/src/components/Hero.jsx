function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-60"></div>
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-pink-100 blur-3xl opacity-60"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
            🚀 Build Your Developer Stack
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Discover the Best
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
            for Your Journey
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore modern technologies, discover powerful tools, and build
            your perfect developer stack for your next amazing project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Technologies →
            </a>

            <a
              href="#about"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-100 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">10+</h3>
              <p className="mt-1 text-sm text-gray-500">Technologies</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="mt-1 text-sm text-gray-500">Categories</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="mt-1 text-sm text-gray-500">Developer Focused</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-orange-100 via-pink-100 to-violet-100 p-4 shadow-2xl sm:p-6">
            
            <div className="overflow-hidden rounded-2xl bg-gray-950 shadow-xl">
              
              {/* Browser Header */}
              <div className="flex items-center gap-2 border-b border-gray-800 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span className="h-3 w-3 rounded-full bg-green-400"></span>

                <span className="ml-3 text-xs text-gray-500">
                  developer-stack.js
                </span>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-8 sm:p-8 sm:text-base">
                <p className="text-pink-400">
                  const <span className="text-blue-400">stack</span> = [
                </p>

                <p className="pl-6 text-green-400">
                  "React",
                </p>

                <p className="pl-6 text-green-400">
                  "Node.js",
                </p>

                <p className="pl-6 text-green-400">
                  "MongoDB",
                </p>

                <p className="pl-6 text-green-400">
                  "Tailwind CSS"
                </p>

                <p className="text-pink-400">];</p>

                <p className="mt-4 text-gray-500">
                  // Build something amazing 🚀
                </p>

                <p className="mt-2 text-gray-500">
                  // Choose. Build. Create.
                </p>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -left-4 top-10 hidden rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg sm:block">
            <p className="text-xs text-gray-400">Popular</p>
            <p className="font-bold text-gray-800">⚛️ React</p>
          </div>

          <div className="absolute -bottom-5 -right-4 hidden rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg sm:block">
            <p className="text-xs text-gray-400">Developer Tool</p>
            <p className="font-bold text-gray-800">⚡ Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;