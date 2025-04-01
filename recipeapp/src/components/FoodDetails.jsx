import { useEffect } from "react";

export default function FoodDetails({ foodId }) {
  //   const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  //   const API_KEY = "1f92ca1618cd4741afc345b127e0de07";

  useEffect(() => {
    function fetchFood() {
      console.log(foodId);
      //   setFoodId(data)
    }
    fetchFood();
  }, []);
  return (
    <div>
      Food Details{foodId}
      <p>{foodId.title}</p>
      <img src={foodId.image} alt="" />
    </div>
  );
}
