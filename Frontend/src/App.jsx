import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import { searchMovies } from "./api";

export default function App() {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {

    if (!query) return;

    setLoading(true);

    const data = await searchMovies(query);

    setMovies(data.Search || []);

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-900">

      <div className="mx-auto max-w-7xl p-5">

        <h1 className="mb-8 text-center text-4xl font-bold">
          🎬 Movie Search
        </h1>

        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
        />

        {loading && (
          <p className="mt-8 text-center">Loading...</p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          ))}

        </div>

      </div>
    </div>
  );
}