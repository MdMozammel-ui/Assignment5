function TechCard({ technology, onAddToStack }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Icon */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50 p-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Category + Badge */}
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-xl font-bold text-gray-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      {/* Rating + Difficulty */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-xs text-gray-400">Rating</p>
          <p className="font-semibold text-gray-800">
            ⭐ {technology.rating}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Difficulty</p>
          <p className="font-semibold text-gray-800">
            {technology.difficulty}
          </p>
        </div>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAddToStack(technology)}
        className="mt-5 w-full rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-3 font-semibold text-white transition hover:opacity-90"
      >
        + Add to Stack
      </button>
    </div>
  );
}

export default TechCard;