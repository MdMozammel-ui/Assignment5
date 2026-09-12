function Hero() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            Build Your Developer Stack
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Discover the Best
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
            for Your Journey
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore popular technologies, choose the tools you need, and
            build your perfect developer stack for your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-pink-500 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">10+</h3>
              <p className="text-sm text-gray-500">Technologies</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="text-sm text-gray-500">Categories</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-sm text-gray-500">Developer Focused</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-orange-100 via-pink-100 to-violet-100 p-8 shadow-xl">
            <div className="rounded-2xl bg-gray-900 p-6 shadow-2xl">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <p className="text-pink-400">
                  const <span className="text-blue-400">stack</span> = [
                </p>

                <p className="pl-5 text-green-400">
                  "React",
                </p>

                <p className="pl-5 text-green-400">
                  "Node.js",
                </p>

                <p className="pl-5 text-green-400">
                  "MongoDB",
                </p>

                <p className="pl-5 text-green-400">
                  "Tailwind CSS"
                </p>

                <p className="text-pink-400">
                  ];
                </p>

                <p className="pt-3 text-gray-400">
                  // Build something amazing 🚀
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;