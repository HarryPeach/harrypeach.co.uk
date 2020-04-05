import styles from "./Project.module.scss";
import Button from "./Button";

export default function Project(props) {
	const tags = props.tags.map((tag) => {
		return (
			<span className={styles.tag} key={tag}>
				{tag}
			</span>
		);
	});
	return (
		<div className={styles.project}>
			<h1 className={styles.title}>{props.title}</h1>
			{tags}
			<p className={styles.desc}>{props.desc}</p>
			<div className={styles.buttons}>
				{props.source && <Button secondary>Source Code</Button>}
				<Button>Demo</Button>
			</div>
		</div>
	);
}
