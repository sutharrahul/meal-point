import { useEffect, useState } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import { searchMealByName } from "./service";
import MealCard from "./MealCard";
import LoadingCard from "./LoadingCard";
import SearchResult from "./SearchResult";

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
      <SearchResult meals={mealResult} loading={loading} />
    </>
  );
}

export default App;
