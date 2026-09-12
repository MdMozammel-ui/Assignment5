function Stack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-lg">
              🧰
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Your Stack
            </h2>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            {stack.length}{" "}
            {stack.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-semibold text-red-500 transition hover:text-red-600"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-7 text-center">

          <div className="text-4xl">
            🧰
          </div>

          <h3 className="mt-4 font-semibold text-gray-800">
            Your stack is empty
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Add technologies from the list and build your
            perfect developer stack.
          </p>

        </div>
      ) : (
        <div className="mt-6 space-y-3">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition hover:border-pink-100 hover:bg-pink-50"
            >

              {/* Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-gray-800">
                  {technology.name}
                </h3>

                <p className="mt-0.5 text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-400 shadow-sm transition hover:bg-red-500 hover:text-white"
              >
                ✕
              </button>

            </div>
          ))}

        </div>
      )}

      {/* Bottom Tip */}
      <div className="mt-6 rounded-xl bg-gradient-to-r from-orange-50 via-pink-50 to-violet-50 p-4">
        <p className="text-xs leading-5 text-gray-600">
          💡 <span className="font-semibold">Tip:</span>{" "}
          Choose technologies that match your project goals.
        </p>
      </div>

    </aside>
  );
}

export default Stack;