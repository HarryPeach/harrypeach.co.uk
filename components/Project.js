import styles from "./Project.module.scss";
import Button from "./Button";
import Link from "next/link";
import Router from "next/router";
import { motion } from "framer-motion";

export default function Project(props) {
	const tags = props.tags.map((tag) => {
		return (
			<span className={styles.tag} key={tag}>
				{tag}
			</span>
		);
	});

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<motion.div variants={item} className={styles.project}>
			<h1 className={styles.title}>{props.title}</h1>
			{tags}
			<p className={styles.desc}>{props.desc}</p>
			<div className={styles.buttons}>
				{props.source && <Button secondary>Source Code</Button>}
				<Link href="/projects/[project]" as={`/projects/${props.id}`}>
					<Button>More</Button>
				</Link>
			</div>
		</motion.div>
	);
}
