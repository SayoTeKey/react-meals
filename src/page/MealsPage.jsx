import { useState, useEffect } from "react";

import CardItemComponent from "../components/CardItemComponent";
import { fetchData } from "../utilities/apiFetch";

const MealsPage = () => {
  const [singleMeal, setSingleMeal] = useState([]);

  const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetchData(mealsUrl);
        console.log("From API", data.meals);
        setSingleMeal(data.meals);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchMeals();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {singleMeal.length > 0 ? (
        singleMeal.map((food) => (
          <>
            <p key={food.idMeal}>{food.strMeal}</p>
            <CardItemComponent foodX={food} />
          </>
        ))
      ) : (
        <p>"Kein Essen gefunden!"</p>
      )}
    </div>
  );
};

export default MealsPage;
