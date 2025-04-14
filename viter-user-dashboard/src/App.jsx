import React, { useState } from "react";

import UserCard from "./assets/components/UserCard";
import SearchInput from "./assets/components/SearchInput";
import { useFetch } from "./assets/custom-hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { data: users, loading, error } = useFetch(API_URL);

  const filteredUsers = users
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  console.log(users);
  console.log(searchTerm);

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            User Dashboard
          </h1>

          <SearchInput onSearch={handleSearch} />

          {/* Loading */}
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading Users...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              Error: {error}
            </div>
          )}

          {/* User Cards */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-600">
                  No users found matching your search.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
