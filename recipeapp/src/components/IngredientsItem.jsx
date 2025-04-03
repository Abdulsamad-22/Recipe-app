import styles from "./ingredients.module.css";
export default function IngredientItem({ item }) {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img
          className={styles.itemImage}
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
          alt="ingredients image"
        />
      </div>

      <div className={styles.ingredientsNameUnit}>
        <div>{item.name}</div>
        <div>
          {item.amount} {item.unit}
        </div>
      </div>
    </div>
  );
}
