function About() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            About Dev Stack
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to
            <span className="ml-2 brand-gradient-text">
              Build Better
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Dev Stack helps developers discover, compare, and organize the
            technologies they need for modern software projects.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Feature 1 */}
          <div className="rounded-2xl border border-gray-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-xl text-white">
              🔎
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Discover Technologies
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Explore popular frontend, backend, database, programming
              language, and development tools in one place.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-gray-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-xl text-white">
              ⚡
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Choose With Confidence
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Check technology categories, difficulty levels, descriptions,
              and ratings before choosing what fits your project.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-gray-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-xl text-white">
              🚀
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Build Your Stack
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Add technologies to your personal stack and keep everything
              you need for your next project organized.
            </p>
          </div>

        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 overflow-hidden rounded-3xl brand-gradient p-8 text-center shadow-lg sm:p-10">
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
            Ready to Build Your Stack?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
            Explore the available technologies and start creating a stack
            that matches your development goals.
          </p>

          <a
            href="#technologies"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-pink-600 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore Technologies
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
