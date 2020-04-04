import styles from "./Header.module.scss";

export default function Header(props) {
	return (
		<div className={styles.header}>
			<h1 className={styles.title}>Harry Peach</h1>
			<h2 className={styles.subtitle}>
				Computer Science Student at Newcastle University
			</h2>
		</div>
	);
}
