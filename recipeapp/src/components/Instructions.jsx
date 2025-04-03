import styles from "./instructions.module.css";
export default function Instructions({ isLoading, food }) {
  return (
    <div>
      <h2 className={styles.header}>Instructions</h2>
      <ol className={styles.list}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => (
            <li className={styles.instructionList}>{step.step}</li>
          ))
        )}
      </ol>
    </div>
  );
}
