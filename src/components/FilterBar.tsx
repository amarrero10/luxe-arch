export default function FilterBar() {
  return (
    <div className="bg-surface-container-lowest border-b border-on-surface-variant/10 z-40 px-6 md:px-margin-desktop py-4 hidden md:flex items-center gap-stack-md shrink-0">
      <div className="relative">
        <input
          className="w-64 pl-10 pr-4 py-2 bg-surface rounded-full border border-surface-variant focus:border-on-tertiary-container focus:ring-1 focus:ring-on-tertiary-container outline-none transition-all text-body-md placeholder:text-on-surface-variant"
          placeholder="Search location..."
          type="text"
        />
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
          search
        </span>
      </div>
      <div className="h-6 w-px bg-surface-variant mx-2" />
      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-variant hover:border-primary transition-colors text-label-md font-semibold text-on-surface">
        Price Range
        <span className="material-symbols-outlined text-[18px]">
          keyboard_arrow_down
        </span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-variant hover:border-primary transition-colors text-label-md font-semibold text-on-surface">
        Property Type
        <span className="material-symbols-outlined text-[18px]">
          keyboard_arrow_down
        </span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-variant hover:border-primary transition-colors text-label-md font-semibold text-on-surface ml-auto">
        <span className="material-symbols-outlined text-[18px]">tune</span>
        More Filters
      </button>
    </div>
  );
}
