import styles from "./Project.module.scss";
import Button from "./Button";

export default function Project(props) {
	return (
		<div className={styles.project}>
			<h1 className={styles.title}>{props.title}</h1>
			<p className={styles.desc}>{props.desc}</p>
			{props.source && <Button secondary>Source Code</Button>}
			<Button>Demo</Button>
		</div>
	);
}
