import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import Stack from "./components/Stack";
import technologies from "./data/technologies.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [stack, setStack] = useState([]);

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

  // Add technology
  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack([...stack, technology]);
  };

  // Remove one technology
  const handleRemove = (id) => {
    setStack(stack.filter((technology) => technology.id !== id));
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <Hero />

      {/* Technology Section */}
      <section id="technologies" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
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

          {/* Main Content */}
          <div className="mt-10 grid gap-6 lg:grid-cols-4">

            {/* Technology Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
              {filteredTechnologies.map((technology) => (
                <TechCard
  key={technology.id}
  technology={technology}
  stack={stack}
  onAddToStack={handleAddToStack}
/>
              ))}
            </div>

            {/* Your Stack */}
            <Stack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;