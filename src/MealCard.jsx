import React from "react";

/*
{
    "idMeal": "53033",
    "strMeal": "Japanese gohan rice",
    "strCategory": "Side",
    "strArea": "Japanese",
    "strInstructions": "STEP 1\r\nRinsing and soaking your rice is key to achieving the perfect texture. Measure the rice into a bowl, cover with cold water, then use your fingers to massage the grains of rice – the water will become cloudy. Drain and rinse again with fresh water. Repeat five more times until the water stays clear.\r\n\r\nSTEP 2\r\nTip the rinsed rice into a saucepan with 400ml water, or 200ml dashi and 200ml water, bring to the boil, then turn down the heat to a low simmer, cover with a tight-fitting lid with a steam hole and cook for 15 mins. Remove from the heat and leave to sit for another 15 mins, then stir through the mirin. Remove the lid and give it a good stir. Serve with any or all of the optional toppings.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg",
    "strYoutube": "https://www.youtube.com/watch?v=rZO86_-MIp0",
    "strIngredient1": "Sushi Rice",
    "strIngredient2": "Mirin",
    "strIngredient3": "Pickle Juice",
    "strIngredient4": "Spring Onions",
    "strSource": "https://www.bbcgoodfood.com/recipes/japanese-rice-gohan",
}
*/

export default function MealCard({ data }) {
  const { strMeal, strArea, strInstructions, strMealThumb, strYoutube } = data;
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg ml-20 mt-4">
      <div className="w-1/3 bg-cover bg-landscape">
        <img className="" src={strMealThumb} alt={strMeal} />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-2xl font-bold text-gray-900">{strMeal}</h1>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {strInstructions}
        </p>
        <div className="flex justify-between mt-3 item-center">
          <a
            target="_blank"
            href={strYoutube}
            className="px-3 py-2 flex justify-between items-center text-xs font-medium text-white bg-red-800 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-2"
              fill="currentColor"
              // className="color: #ff0000"
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
