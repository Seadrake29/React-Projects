import { useState } from "react";

function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <input
        type="text"
        placeholder="Enter a todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
