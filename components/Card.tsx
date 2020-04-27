import styles from "./Card.module.css";

import { FiArrowLeft } from "react-icons/fi";
import clsx from "clsx";

type CardProps = {
	children?: React.ReactNode;
	className?: string;
	backButtonCallback?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function Card({
	children,
	className,
	backButtonCallback,
}: CardProps) {
	return (
		<div className={clsx(className, styles.card)}>
			{backButtonCallback && (
				<div className={styles.back} onClick={backButtonCallback}>
					<FiArrowLeft />
				</div>
			)}
			{children}
		</div>
	);
}
