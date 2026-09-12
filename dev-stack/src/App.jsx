
import technologies from "./data/technologies.json";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <Navbar />
      <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
        Dev Stack Builder
      </h1>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <div
            key={technology.id}
            className="rounded-xl bg-white p-5 shadow-md"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="mb-4 h-16 w-16 object-contain"
            />

            <h2 className="text-xl font-bold text-slate-800">
              {technology.name}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {technology.category}
            </p>

            <p className="mt-3 text-slate-600">
              {technology.description}
            </p>

            <p className="mt-3 font-medium text-yellow-600">
              Rating: {technology.rating}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Difficulty: {technology.difficulty}
            </p>

            <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              {technology.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;