import axios from "axios";

const mealDbBaseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export async function searchMealByName({ name }) {
  const res = await axios.get(mealDbBaseUrl + name);
  if (res.status == 200) {
    return res.data;
  }
  return { meals: [] };
}
