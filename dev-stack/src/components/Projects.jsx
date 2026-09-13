function Projects() {
  const projects = [
    {
      title: "Developer Portfolio",
      description:
        "A personal portfolio website to showcase skills, projects, experience, and contact information.",
      technologies: ["React", "Tailwind CSS"],
      icon: "💼",
    },
    {
      title: "E-commerce Website",
      description:
        "A modern online shopping platform with product listings, cart functionality, and a smooth user experience.",
      technologies: ["React", "Node.js", "MongoDB"],
      icon: "🛒",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for creating, organizing, and tracking daily tasks and project progress.",
      technologies: ["JavaScript", "Express.js"],
      icon: "✅",
    },
  ];

  return (
    <section id="projects" className="bg-white px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600">
            Project Ideas
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Build Something
            <span className="ml-2 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Get inspired by these project ideas and use your favorite
            technologies to bring them to life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 via-pink-100 to-violet-100 text-3xl">
                {project.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <button className="mt-6 font-semibold text-pink-500 transition hover:text-violet-600">
                Explore Idea →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;