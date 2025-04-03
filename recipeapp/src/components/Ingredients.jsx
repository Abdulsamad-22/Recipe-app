import styles from "./ingredients.module.css";
import IngredientItem from "./IngredientsItem";
export default function Ingredients({ food, setIsLoading, isLoading }) {
  return (
    <div className={styles.ingredients}>
      <h2 className={styles.header}>Ingredients</h2>
      <div className={styles.ingredientsContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.extendedIngredients.map((item) => (
            <div className={styles.ingredientsCard}>
              <IngredientItem key={item.id} item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
