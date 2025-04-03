import { useEffect, useState } from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import FoodContent from "./FoodContent";
import styles from "./fooddetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "1f92ca1618cd4741afc345b127e0de07";

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.detailsCard}>
        <FoodContent food={food} />
        <Ingredients
          key={food.name}
          food={food}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Instructions key={food.number} food={food} isLoading={isLoading} />
      </div>
    </div>
  );
}
