import { ArrowRight } from "lucide-react";
import React from "react";

const News = () => {
  const [query, setQuery] = React.useState("");
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const API_KEY = "52f0dd7f328b41e094f13691e93202f3";

  const fetchNews = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          query
        )}&apiKey=${API_KEY}&pageSize=6`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();
      setArticles(data.articles);
    } catch (err) {
      setError(err.message);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNews();
  };

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="font-bold text-3xl">Latest News</h1>
          </div>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for news..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg disabled:bg-blue-400 transition duration-200"
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
              <p>Error: {error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={article.urlToImage || "http://placehold.co/600x400"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="py-4 px-4 flex flex-col flex-grow">
                  <h3 className="mb-2 font-bold text-lg line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm flex-grow line-clamp-3">
                    {article.description || "No description available."}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <small className="text-gray-500">
                      {article.source?.name || "Unknown"}
                    </small>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                      Read more <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!loading && articles.length === 0 && (
            <p className="text-center text-gray-600 mt-10">
              No articles found. Try searching for something else.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
