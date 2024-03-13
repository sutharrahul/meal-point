import axios from "axios";

const mealDbBaseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export async function searchMealByName({ name }) {
  try {
    const res = await axios.get(mealDbBaseUrl + name);
    if (res.status == 200) {
      return res.data;
    }
    return { meals: [] };
  } catch (error) {
    console.error(error.message);
    return {
      errorMessage: "Somthing went wrong",
      meals: [],
    };
  }
}
