export default function SearchBar({ value, onChange, onSearch }) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch();
        }
    };
return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search movie..."
        className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 outline-none"
      />

      <button
        onClick={onSearch}
        className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}