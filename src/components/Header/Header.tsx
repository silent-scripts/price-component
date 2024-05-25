import { Switch } from "../Switch";
import { Title } from "../Title";
import styles from "./Header.module.css";

type HeaderProps = {
  title?: string;
  checked?: boolean;
  onCheck?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Header: React.FC<HeaderProps> = ({ checked, title, onCheck }) => {
  return (
    <header className={styles.header}>
      <Title>{title}</Title>
      <Switch checked={checked} onChange={onCheck} />
    </header>
  );
};
