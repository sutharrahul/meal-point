import React from "react";

export default function MealCard({ data }) {
  const { strMeal, strArea, strInstructions, strMealThumb, strYoutube } = data;
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg mt-4">
      <div className="w-1/3 bg-cover bg-landscape">
        <img className="" src={strMealThumb} alt={strMeal} />
      </div>
      <div className="w-2/3 p-4">
        <h1
          className="text-2xl font-bold text-gray-900 line-clamp-1"
          title={strMeal}
        >
          {strMeal}
        </h1>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {strInstructions}
        </p>
        <div className="flex justify-between mt-3 item-center">
          <a
            target="_blank"
            className="px-2 py-1 flex justify-between items-center text-xs text-red-700 font-bold rounded-lg"
            href={strYoutube}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 "
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
