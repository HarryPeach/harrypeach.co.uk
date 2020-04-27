import styles from "./Card.module.scss";

import { FiArrowLeft } from "react-icons/fi";

type CardProps = {
	children?: React.ReactNode;
	backButtonCallback?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function Card({ children, backButtonCallback }: CardProps) {
	return (
		<div className={styles.card}>
			{backButtonCallback && (
				<div className={styles.back} onClick={backButtonCallback}>
					<FiArrowLeft />
				</div>
			)}
			{children}
		</div>
	);
}
