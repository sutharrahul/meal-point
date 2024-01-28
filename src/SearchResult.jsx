import React from "react";
import MealCard from "./MealCard";
import LoadingCard from "./LoadingCard";

export default function SearchResult({ meals, loading }) {
  return (
    <div className="mx-auto  grid justify-center columns-2">
      {loading && (
        <>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </>
      )}
      <>
        {!loading &&
          meals?.map((meal) => <MealCard key={meal.idMeal} data={meal} />)}
      </>
    </div>
  );
}
