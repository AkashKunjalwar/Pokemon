import { useSelector } from "react-redux";
import styles from "./PokeDataForm.module.css";

const PokeDataform = () => {
  const data = useSelector((state) => state.PokeDataReducer.data);
  const { name, height, weight } = data;

  return (
    <div className={styles.column}>
      <form className={styles.form}>
        <div className={styles.formRow}>
          <label>Name</label>
          <input type="text" disabled value={name} />
        </div>
        <div className={styles.formRow}>
          <label>Height in metres</label>
          <input type="text" disabled value={height} />
        </div>
        <div className={styles.formRow}>
          <label>Weight in KG</label>
          <input type="text" disabled value={weight} />
        </div>
        <div className={styles.formRow}>
          <label>Types</label>
          <ul>
            {data.types.map((type) => (
              <li key={type.slot}>{type.type.name.toUpperCase()}</li>
            ))}
          </ul>
        </div>
        <div className={styles.formRow}>
          <label>Attacks</label>
          <ul>
            {data.attacks.map((attack) => (
              <li key={Math.random()}>{attack.move.name.toUpperCase()}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default PokeDataform;
