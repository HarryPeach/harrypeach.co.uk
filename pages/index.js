import styles from "./Index.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Project from "../components/Project";
import Link from "next/link";
import projects from "../data/projects";

import { motion } from "framer-motion";

export default function Index() {
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

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
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
			<div>
				<Head>
					<title>Harry Peach</title>
				</Head>
				<Header />
				<motion.div
					initial="hidden"
					animate="show"
					exit="exit"
					variants={container}
				>
					{projectsMap}
				</motion.div>
			</div>
		</>
	);
}
