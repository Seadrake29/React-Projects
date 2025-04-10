import { useState } from "react";
import Book from "./components/book/Book";
import BookCard from "./components/book/BookCard";
import { BookOpen } from "lucide-react";

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, { id: Date.now(), ...book }]);
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="bg-light-gray min-h-screen py-10">
      <section className="text-center text-primary mb-10">
        <h1 className="text-5xl">My Book Collection</h1>
        <small className="text-2xl">Track your reading journey</small>
      </section>

      <div className="container mx-auto px-4">
        <Book onAdd={handleAddBook} />

        <section className="mt-10">
          {books.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <BookOpen className="mx-auto w-20 h-20 text-gray-300" />
              <p className="text-xl font-medium mt-4">
                Your collection is empty
              </p>
              <p className="text-sm">Add some book to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  onRemove={handleRemoveBook}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
