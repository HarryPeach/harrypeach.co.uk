import Router from "next/router";
import { motion } from "framer-motion";

import Card from "./Card";
import * as Variants from "../src/js/animationVariants";

import styles from "./Project.module.css";
type ProjectProps = {
	desc: string;
	id: number;
	tags: string[];
	title: string;
};

export default function Project({ id, tags, desc, title }: ProjectProps) {
	const projectTags = tags.map((tag, index) => {
		return (
			<span className={styles.tag} key={tag}>
				{tag} {index !== tags.length - 1 && "/"}
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
		<motion.div variants={Variants.simpleFade}>
			<Card className={styles.card} onClick={openLink}>
				<div className={styles.titleFlex}>
					<h1 className={styles.title}>{title}</h1>
					<span className={styles.tags}>{projectTags}</span>
				</div>
				<p className={styles.desc}>{desc}</p>
			</Card>
		</motion.div>
	);
}
