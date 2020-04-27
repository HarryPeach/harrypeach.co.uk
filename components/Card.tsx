import styles from "./Card.module.scss";

type CardProps = {
	children?: React.ReactNode;
};

export default function Card({ children }: CardProps) {
	return <div className={styles.card}>{children}</div>;
}
