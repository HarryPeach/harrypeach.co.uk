import Project from "../Project";
import projects from "../../data/projects.json";
import * as Variants from "../../src/animationVariants";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import styles from "./ProjectList.module.css";

export default function ProjectList() {
	const projectsMap = projects.map((project) => (
		<Project
			key={project.id}
			id={project.id}
			title={project.title}
			desc={project.desc}
			tags={project.tags}
		/>
	));

	return (
		<div className="section">
			<motion.div
				initial="hidden"
				animate="show"
				exit="exit"
				variants={Variants.regularItem}
			>
				<h2 className={styles.title}>Projects</h2>
				{projectsMap}
				<h3 className={styles.more}>More projects <FiArrowRight /></h3>
			</motion.div>
		</div>
	);
}
