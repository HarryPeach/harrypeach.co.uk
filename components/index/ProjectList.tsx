import Project from "../Project";
import projects from "../../data/projects.json";
import * as Variants from "../../src/js/animationVariants";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import styles from "./ProjectList.module.css";

type ProjectListType = {
	projectsToLoad: number;
	showMore?: boolean;
	showTitle?: boolean;
};

export default function ProjectList({
	showTitle = true,
	showMore = true,
	projectsToLoad,
}: ProjectListType) {
	const projectsMap = projects
		.slice(0, projectsToLoad)
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
				{showTitle && <h2 className={styles.title}>Projects</h2>}
				{projectsMap}
				<motion.h3
					className={styles.more}
					variants={Variants.simpleFade}
				>
					{showMore && (
						<Link href="/moreProjects">
							<a>
								More projects <FiArrowRight />
							</a>
						</Link>
					)}
				</motion.h3>
			</motion.div>
		</div>
	);
}
