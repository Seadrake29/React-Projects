import { useState } from "react";

function Book({ onAdd }) {
  const [userInput, setUserInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  const bookSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() === "" && authorInput.trim() === "") {
      alert("Book title and author cannot be empty.");
      return;
    }

    if (userInput.trim() === "") {
      alert("Book title cannot be empty.");
      return;
    }

    if (authorInput.trim() === "") {
      alert("Author name cannot be empty.");
      return;
    }

    onAdd({
      title: userInput,
      author: authorInput,
    });

    setUserInput("");
    setAuthorInput("");
  };

  return (
    <section className="bg-white py-10 w-full max-w-3xl px-6 sm:px-10 mx-auto shadow-2xl rounded-xl">
      <div>
        <h3 className="text-2xl mb-6">Add New Book</h3>

        <form onSubmit={bookSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium mb-1">Book Title</label>
              <input
                type="text"
                placeholder="Enter book title"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm font-medium mb-1">Author</label>
              <input
                type="text"
                placeholder="Enter author name"
                value={authorInput}
                onChange={(e) => setAuthorInput(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-fit"
          >
            Add to Collection
          </button>
        </form>
      </div>
    </section>
  );
}

export default Book;
