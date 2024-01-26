import { useEffect, useState } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import { searchMealByName } from "./service";

function App() {
  const [mealResult, setMealResult] = useState([]);

  function onSearch(search) {
    if (!search) return;
    searchMealByName({ name: search })
      .then((data) => {
        setMealResult(data.meals);
      })
      .catch((err) => {});
  }

  return (
    <>
      <Header />
      <Searchbar onSearch={onSearch} />
      {JSON.stringify(mealResult)}
    </>
  );
}

export default App;
