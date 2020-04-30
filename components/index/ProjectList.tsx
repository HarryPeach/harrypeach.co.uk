import Project from "../Project";
import projects from "../../data/projects.json";
import * as Variants from "../../src/js/animationVariants";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import styles from "./ProjectList.module.css";

export default function ProjectList() {
	const projectsMap = projects
		.slice(0, 3)
		.map((project) => (
			<Project
				key={project.id}
				id={project.id}
				title={project.title}
				desc={project.desc}
				tags={project.tags}
			/>
		));

	return (
		<div className={styles.section}>
			<motion.div
				initial="hidden"
				animate="show"
				exit="exit"
				variants={Variants.regularItem}
			>
				<h2 className={styles.title}>Projects</h2>
				{projectsMap}
				<motion.h3
					className={styles.more}
					variants={Variants.simpleFade}
				>
					More projects <FiArrowRight />
				</motion.h3>
			</motion.div>
		</div>
	);
}
