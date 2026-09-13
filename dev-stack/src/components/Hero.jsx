function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Build Your Developer Stack
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build Your Ideal
              <span className="block brand-gradient-text">
                Development Stack
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
              Discover the best technologies for modern web development.
              Explore different tools, compare technologies, and build your
              perfect developer stack.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              <a
                href="#technologies"
                className="rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:-translate-y-0.5 hover:border-pink-300 hover:text-pink-500"
              >
                Learn More
              </a>

            </div>
          </div>

          {/* Right 3D Visual */}
          <div className="relative flex items-center justify-center">

            <div className="relative w-full max-w-xl">

              <img
                src="/dev-stack-hero.png"
                alt="Developer technology stack"
                className="mx-auto w-full object-contain drop-shadow-2xl"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;