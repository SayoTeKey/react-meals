import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../utilities/apiFetch";

const MealsDetailPage = () => {
  const { id } = useParams();
  const [oneMeal, setOneMeal] = useState([]);

  const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  {
    /*id kommt von <Route path="/meals/:id" element={<MealsDetailPage />} /> aus App.jsx*/
  }
  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetchData(mealUrl);
        console.log("From API", data.meals[0]);
        setOneMeal(data.meals[0]);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchMeals();
  }, []);
  //
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className=" flex w-full">
        <button className="btn btn-primary ">
          <Link to="/meals">Back to Meals</Link>
        </button>
      </div>
      <div className="hero-content flex-col lg:flex-row gap-8">
        <br />
        <img
          src={oneMeal.strMealThumb}
          alt={oneMeal.strMeal}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold mb-3">{oneMeal.strMeal}</h1>
          <p className="py-6 flex flex-col">
            {oneMeal.strInstructions &&
              oneMeal.strInstructions
                .split(".")
                .filter((instruction) => instruction.trim() !== "")
                .map((instruction, index, arr) => {
                  return <span key={index}>- {instruction}</span>;
                })}
          </p>

          <button className="btn btn-primary">
            <Link to="/meals">Back to Meals</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealsDetailPage;
