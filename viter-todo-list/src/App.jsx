import { useState } from "react";
import TodoForm from "./components/form/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    setTodos([...todos, { id: Date.now(), text: todoText }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="pt-24 bg-gray-100 min-h-screen">
      <div className="container">
        <div className="m-10 rounded-xl overflow-hidden">
          <div className="bg-blue-500 pt-10 pb-5 pl-10 flex items-center rounded-t-xl">
            <h1 className="text-white text-4xl font-bold">Todo List</h1>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-b-xl">
            <TodoForm onAdd={handleAddTodo} />

            <div className="mt-6">
              {todos.length === 0 ? (
                <p className="text-center text-gray-500">
                  No todos yet. Add one above!
                </p>
              ) : (
                <ul className="space-y-3 flex flex-col items-center">
                  {todos.map((todo) => (
                    <li
                      key={todo.id}
                      className="bg-gray-50 p-3 rounded flex justify-between items-center shadow-sm w-[80%]"
                    >
                      <span>{todo.text}</span>
                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="text-white bg-red-500 p-3 rounded-md text-sm font-medium"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
