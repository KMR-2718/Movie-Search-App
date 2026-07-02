export default function MovieCard({ movie }) {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-800 shadow-lg">

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://placehold.co/300x450"
        }
        className="h-80 w-full object-cover"
      />

      <div className="space-y-2 p-4">
        <h2 className="font-bold">{movie.Title}</h2>

        <div className="flex justify-between text-sm text-gray-400">
          <span>{movie.Year}</span>
          <span>{movie.Type}</span>
        </div>
      </div>
    </div>
  );
}