function BookCard({ id, title, author, onRemove }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <small className="text-gray-600">by {author}</small>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="mt-4 bg-red-200 text-red-500 text-sm font-medium w-full py-2 rounded text-center"
      >
        Remove
      </button>
    </div>
  );
}

export default BookCard;
