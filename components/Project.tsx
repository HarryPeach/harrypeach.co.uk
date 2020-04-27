import Router from "next/router";
import { motion } from "framer-motion";

import Card from "./Card";

import styles from "./Project.module.css";
type ProjectProps = {
	desc: string;
	id: number;
	tags: string[];
	title: string;
};

export default function Project({ id, tags, desc, title }: ProjectProps) {
	const projectTags = tags.map((tag) => {
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

	const openLink = () => {
		Router.push("/projects/[project]", `/projects/${id}`);
	};

	return (
		<motion.div variants={item}>
			<Card className={styles.card} onClick={openLink}>
				<h1 className={styles.title}>{title}</h1>
				{projectTags}
				<p className={styles.desc}>{desc}</p>
			</Card>
		</motion.div>
	);
}
