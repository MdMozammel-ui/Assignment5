import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  const categories = [
    "All",
    ...new Set(
      technologies.map((technology) => technology.category)
    ),
  ];

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter(
          (technology) =>
            technology.category === selectedCategory
        );

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack([...stack, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  const handleRemove = (id) => {
    const removedTechnology = stack.find(
      (technology) => technology.id === id
    );

    setStack(
      stack.filter(
        (technology) => technology.id !== id
      )
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack.`
      );
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <Hero />

      <section
  id="technologies"
  className="bg-slate-50 px-4 py-20 sm:py-24"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
        Explore Technologies
      </span>

      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Build Your Perfect
        <span className="ml-2 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          Developer Stack
        </span>
      </h2>

      <p className="mt-4 text-base leading-7 text-gray-600">
        Discover the technologies you need and create a powerful stack
        for your next project.
      </p>
    </div>

    {/* Category Filter */}
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white shadow-md shadow-pink-200"
              : "border border-gray-200 bg-white text-gray-600 hover:-translate-y-0.5 hover:border-pink-300 hover:text-pink-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Loading */}
    {loading ? (
      <div className="flex min-h-80 items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

          <p className="mt-4 font-medium text-gray-600">
            Loading technologies...
          </p>
        </div>
      </div>
    ) : (
      /* Technology + Stack */
      <div className="mt-12 grid gap-8 lg:grid-cols-4">

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

        {/* Stack */}
        <Stack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />

      </div>
    )}
  </div>
</section>

      <Footer />
    </div>
  );
}

export default App;