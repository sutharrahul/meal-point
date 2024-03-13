import { useEffect, useState } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import { searchMealByName } from "./service";
import SearchResult from "./SearchResult";
import Footer from "./Footer";

function App() {
  const [mealResult, setMealResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSearch(name) {
    if (loading || !name) return;
    setLoading(true);
    setMealResult([]);
    const { meals, errorMessage } = await searchMealByName({ name: name });
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setMealResult(meals);
    }
    setLoading(false);
  }
  useEffect(() => {
    onSearch("go");
  }, []);
  return (
    <div className="bg-gray-200">
      <Header />
      <Searchbar onSearch={onSearch} loading={loading} />
      <SearchResult meals={mealResult} loading={loading} />
      <h3 className="text-center text-2xl font-semibold">{error}</h3>
      <Footer />
    </div>
  );
}

export default App;
