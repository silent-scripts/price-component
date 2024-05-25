import clsx from "clsx";
import styles from "./Button.module.css";
import { ButtonType } from "../../types/components";

type ButtonProps = {
  children?: React.ReactNode;
  type?: ButtonType;
};

export const Button: React.FC<ButtonProps> = ({ children, type }) => {
  const buttonClassNames = clsx(styles.button, {
    [styles.buttonPrimary]: type === ButtonType.Primary,
    [styles.buttonSecondary]: type === ButtonType.Secondary,
  });

  return <button className={buttonClassNames}>{children}</button>;
};
