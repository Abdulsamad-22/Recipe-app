import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="food image" />
      <div className={styles.itemContent}>
        <p className={styles.foodName}>{food.title}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            // console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.cardButton}
        >
          View recipe
        </button>
      </div>
    </div>
  );
}
