function TechCard({ technology, stack, onAddToStack }) {
  const isAdded = stack.some(
    (item) => item.id === technology.id
  );

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl">

      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50 p-3 transition duration-300 group-hover:scale-105">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
          {technology.badge}
        </span>
      </div>

      {/* Name + Category */}
      <div className="mt-5">
        <h3 className="text-xl font-bold text-gray-900">
          {technology.name}
        </h3>

        <span className="mt-2 inline-block rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.category}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 flex-1 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      {/* Rating + Difficulty */}
      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5">

        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-400">
            Rating
          </p>

          <p className="mt-1 font-semibold text-gray-800">
            ⭐ {technology.rating}
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-400">
            Difficulty
          </p>

          <p className="mt-1 font-semibold text-gray-800">
            {technology.difficulty}
          </p>
        </div>

      </div>

      {/* Add Button */}
      <button
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl px-4 py-3 font-semibold transition duration-300 ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white shadow-md shadow-pink-200 hover:-translate-y-0.5 hover:shadow-lg"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
      </button>
    </article>
  );
}

export default TechCard;