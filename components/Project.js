import styles from "./Project.module.scss";

export default function Project(props) {
	return (
		<div className={styles.project}>
			<h1 className={styles.title}>{props.title}</h1>
			<p className={styles.desc}>{props.desc}</p>
		</div>
	);
}
