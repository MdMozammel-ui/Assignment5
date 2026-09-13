function TechCard({ technology, stack, onAddToStack }) {
  const isAdded = stack.some(
    (item) => item.id === technology.id
  );

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Top */}
      <div className="flex items-start justify-between gap-4">

        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Badge */}
        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5 flex-1">

        <h3 className="text-xl font-bold text-gray-900">
          {technology.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {technology.description}
        </p>

        {/* Category & Difficulty */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {technology.category}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {technology.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="text-sm font-semibold text-gray-800">
            {technology.rating}
          </span>

          <span className="text-xs text-gray-400">
            / 5.0
          </span>
        </div>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition duration-300 ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-500"
            : "brand-gradient text-white hover:-translate-y-0.5 hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechCard;

