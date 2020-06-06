import styles from "./Card.module.css";

import { FiArrowLeft } from "react-icons/fi";
import clsx from "clsx";

type CardProps = {
	children?: React.ReactNode;
	className?: string;
	onClick?: (event: React.MouseEvent) => void;
	backButtonCallback?: (event: React.MouseEvent) => void;
};

export default function Card({
	children,
	className,
	backButtonCallback,
	onClick,
}: CardProps) {
	return (
		<div className={clsx(className, styles.card)} onClick={onClick}>
			{backButtonCallback && (
				<div className={styles.back} onClick={backButtonCallback}>
					<FiArrowLeft />
				</div>
			)}
			<div className={styles.children}>{children}</div>
		</div>
	);
}
