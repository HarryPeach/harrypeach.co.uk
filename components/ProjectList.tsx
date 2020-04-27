import Project from "./Project";
import projects from "../data/projects.json";

import { motion } from "framer-motion";

export default function ProjectList() {
	const container = {
		hidden: { x: -20, opacity: 0 },
		show: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},
		exit: {
			x: 20,
			opacity: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
			},
		},
	};

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
		<>
			<motion.div
				initial="hidden"
				animate="show"
				exit="exit"
				variants={container}
			>
				{projectsMap}
			</motion.div>
		</>
	);
}
