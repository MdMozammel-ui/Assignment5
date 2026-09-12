import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import technologies from "./data/technologies.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(technologies.map((technology) => technology.category)),
  ];

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter(
          (technology) => technology.category === selectedCategory
        );

  const handleAddToStack = (technology) => {
    console.log("Added to stack:", technology.name);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <Hero />

      {/* Technology Section */}
      <section id="technologies" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          
          {/* Section Heading */}
          <div className="text-center">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Explore Technologies
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Build Your Perfect Developer Stack
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Choose from popular technologies and create a stack that matches
              your development goals.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white"
                    : "bg-white text-gray-600 shadow-sm hover:text-pink-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Technology Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTechnologies.map((technology) => (
              <TechCard
                key={technology.id}
                technology={technology}
                onAddToStack={handleAddToStack}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;