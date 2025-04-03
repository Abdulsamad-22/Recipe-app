import styles from "./foodcontent.module.css";
export default function FoodContent({ food }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.foodName}>{food.title}</h1>
      <div className={styles.imageContainer}>
        <img className={styles.foodImage} src={food.image} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <span>
          <strong>Meal healthScore:{food.healthScore}</strong>
        </span>
        <span>
          <strong>Price per serving:</strong>$
          {(food.pricePerServing / 100).toFixed(2)}
        </span>
        <strong>
          <span>{food.readyInMinutes}Minutes</span>
        </strong>
        <span>
          <strong>Servings:</strong> {food.servings}
        </span>
        <span>{food.dairyFree ? "Dairy Free" : ""}</span>
      </div>
    </div>
  );
}
