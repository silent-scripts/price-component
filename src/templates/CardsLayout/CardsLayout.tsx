import styles from "./CardsLayout.module.css";

type CardsLayoutProps = {
  children?: React.ReactNode;
};

export const CardsLayout: React.FC<CardsLayoutProps> = ({ children }) => {
  return <div className={styles.cardsLayout}>{children}</div>;
};
