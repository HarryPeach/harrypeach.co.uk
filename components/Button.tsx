import styles from "./Button.module.scss";
import clsx from "clsx";

type ButtonProps = {
	children?: React.ReactNode;
	secondary?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onMouseEnter?: void;
};

export default function Button({ onClick, secondary, children }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={clsx(styles.button, secondary && styles.secondary)}
		>
			{children}
		</button>
	);
}
