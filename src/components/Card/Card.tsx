import clsx from "clsx";
import { Button } from "../Button";
import styles from "./Card.module.css";
import { ButtonType } from "../../types/components";

type CardProps = {
  details?: string[];
  isMain?: boolean;
  price?: string;
  title?: string;
};

export const Card: React.FC<CardProps> = ({
  details,
  isMain,
  price,
  title,
}) => {
  const cardClassNames = clsx(styles.card, {
    [styles.cardMain]: isMain,
  });

  return (
    <article className={cardClassNames}>
      <header>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>
          <span className={styles.currency}>$</span>
          {price}
        </p>
      </header>
      <section className={styles.detailsWrapper}>
        <ul className={styles.details}>
          {details?.map((detail) => {
            return (
              <li key={detail} className={styles.detail}>
                {detail}
              </li>
            );
          })}
        </ul>
      </section>
      <Button type={isMain ? ButtonType.Secondary : ButtonType.Primary}>
        Learn More
      </Button>
    </article>
  );
};
