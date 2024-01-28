import { useEffect, useState } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import { searchMealByName } from "./service";
import MealCard from "./MealCard";
import LoadingCard from "./LoadingCard";

function App() {
  const [mealResult, setMealResult] = useState([]);
  const [loading, setLoading] = useState(false);

  async function onSearch(name) {
    if (loading || !name) return;
    setLoading(true);
    const data = await searchMealByName({ name: name });
    setMealResult(data.meals);
    setLoading(false);
  }
  return (
    <>
      <Header />
      <Searchbar onSearch={onSearch} loading={loading} />
      {loading && (
        <>
          <LoadingCard />
          <LoadingCard />
        </>
      )}
      <div>
        {!loading &&
          mealResult?.map((meal) => <MealCard key={meal.idMeal} data={meal} />)}
      </div>
    </>
  );
}

export default App;
