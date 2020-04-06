import styles from "./Button.module.scss";
import clsx from "clsx";

export default function Button(props) {
	return (
		<button
			onClick={props.onClick}
			className={clsx(styles.button, props.secondary && styles.secondary)}
		>
			{props.children}
		</button>
	);
}
