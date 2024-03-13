import React, { useState } from "react";

export default function Searchbar({ onSearch, loading }) {
  const [search, setSearch] = useState("");
  return (
    <div className=" bg-white w-full p-5 sticky top-16">
      <div className=" relative xl:px-80 lg:px-20 md:px-10 sm:px-5 px-2 flex ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.code == "Enter") {
              onSearch(search);
            }
          }}
          type="text"
          className="text-xxl border-black rounded-lg  flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Search for a Meal"
        />

        <button
          type="button"
          disabled={loading}
          className="py-2 px-4 w-20 sm:w-32 ml-1 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          onClick={() => onSearch(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
}
