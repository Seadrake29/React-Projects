import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";
import { useFetch } from "./hooks/useFetch";

const API_KEY = "d0a93350d6c07fa51026526dd08c97fe";

function App() {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");

  const { data, loading, error } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    setUrl(apiUrl);
  };

  return (
    <>
      <div className="min-h-screen py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden ">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="font-bold text-3xl">Movie Explorer</h1>
            </div>

            <SearchBar
              movies={query}
              setMovies={setQuery}
              handleSubmit={handleSubmit}
              loading={loading}
            />

            {error && <p className="text-red-500 text-center">{error}</p>}
            {data && data.results && <MovieCard movies={data.results} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
