"use client";
import { useEffect, useState } from "react";
import { UserApi } from "../api/UserApi";
import { UserCard } from "../components/UserCard";
import { Filter } from "../components/Filter";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    UserApi.fetchUsers().then(setUsers);
  }, []);

  useEffect(() => setFiltered(users), [users]);

  const handleFilter = (query) => {
    setFiltered(
      users.filter((user) =>
        [
          user.name,
          user.username,
          user.email,
          user.phone,
          user.website,
          user.fullAddress,
          user.companyName,
        ].some((val) => val.toLowerCase().includes(query.toLowerCase()))
      )
    );
  };

  return (
    <main className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6 border-b-3 border-blue-100 pb-2 tracking-tight">
        User List
      </h1>

      <Filter onChange={handleFilter} />
      <div className="">
        {filtered.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">No results</p>
        )}
      </div>
    </main>
  );
}
