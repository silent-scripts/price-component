import clsx from "clsx";
import styles from "./Switch.module.css";

type SwitchProps = {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  const sliderClassNames = clsx(styles.slider, styles.round);

  return (
    <div className={styles.switchWrapper}>
      <p className={styles.label}>Annually</p>
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={sliderClassNames}></span>
      </label>
      <p className={styles.label}>Monthly</p>
    </div>
  );
};
