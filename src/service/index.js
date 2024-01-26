import axios from "axios";

const mealDbBaseUrl = "https://www.themealdb.com/api/json/v1/1/";

export async function searchMealByName({ name }) {
  const res = await axios.get(mealDbBaseUrl + `search.php?s=${name}`);
  if (res.status == 200) {
    return res.data;
  }
  return { meals: [] };
}
