import { useState } from "react";

export function Filter({ onChange }) {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  const clearFilter = () => {
    setValue("");
    onChange("");
  };

  return (
    <div className="w-full max-w-md flex items-center gap-2 mb-6">
      <input
        type="text"
        placeholder="🔍 Find user"
        value={value}
        onChange={handleInputChange}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 text-gray-800"
      />
      {value && (
        <button
          onClick={clearFilter}
          className="px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
        >
          Clear all
        </button>
      )}
    </div>
  );
}
