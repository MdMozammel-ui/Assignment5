function Stack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:sticky lg:top-28">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length} {stack.length === 1 ? "technology" : "technologies"} selected
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-sm font-bold text-white">
          {stack.length}
        </div>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-4 py-8 text-center">
          <div className="text-3xl">🧩</div>

          <h3 className="mt-3 text-sm font-semibold text-gray-800">
            Your stack is empty
          </h3>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            Add technologies from the list to build your developer stack.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-6 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                {/* Name & Category */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-gray-900">
                    {technology.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-gray-500">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

      {/* Tip */}
      <div className="mt-6 rounded-xl bg-pink-50 p-4">
        <p className="text-xs leading-5 text-pink-700">
          💡 Tip: Choose technologies that work well together for your project.
        </p>
      </div>
    </aside>
  );
}

export default Stack;

