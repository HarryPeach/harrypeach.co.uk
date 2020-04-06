import styles from "./Index.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Project from "../components/Project";
import Link from "next/link";
import projects from "../data/projects";

import { motion } from "framer-motion";

export default function Index() {
	const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
	const thumbnailVariants = {
		initial: { scale: 0.9, opacity: 0 },
		enter: { scale: 1, opacity: 1, transition },
		exit: {
			scale: 0.5,
			opacity: 0,
			transition: { duration: 1.5, ...transition },
		},
	};

	const projectsMap = projects.map((project) => {
		return (
			<Project
				key={project.id}
				id={project.id}
				title={project.title}
				desc={project.desc}
				tags={project.tags}
			/>
		);
	});

	return (
		<>
			<div className={styles.root}>
				<Head>
					<title>Harry Peach</title>
				</Head>
				<motion.div
					className={styles.content}
					initial="initial"
					animate="enter"
					exit="exit"
					variants={thumbnailVariants}
				>
					<Header />
					{projectsMap}
					{/* <Project
						title="Sample project"
						tags={["React", "Javascript", "Python"]}
						desc="Sint aliquip dolore ex laborum aliquip laborum."
						image=""
						page="/projects/sample"
					/>
					<Project
						title="Sample project"
						tags={["React", "Javascript", "Python"]}
						desc="Sint aliquip dolore ex laborum aliquip laborum."
						image=""
						page="/projects/sample"
					/> */}
				</motion.div>
			</div>
		</>
	);
}
