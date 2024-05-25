import styles from "./Layout.module.css";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className={styles.layout}>
      <img alt="" src="./bg-top.svg" className={styles.backgroundImageTop} />
      {children}
      <img
        alt=""
        src="./bg-bottom.svg"
        className={styles.backgroundImageBottom}
      />
    </main>
  );
};
