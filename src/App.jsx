import { useEffect, useState } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import { searchMealByName } from "./service";
import SearchResult from "./SearchResult";
import Footer from "./Footer";

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
  useEffect(() => {
    onSearch("go");
  }, []);
  return (
    <div className="bg-gray-200">
      <Header />
      <Searchbar onSearch={onSearch} loading={loading} />
      <SearchResult meals={mealResult} loading={loading} />
      <Footer />
    </div>
  );
}

export default App;
