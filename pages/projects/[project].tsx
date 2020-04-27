import React from "react";
import { motion } from "framer-motion";
import Router from "next/router";

import projects from "../../data/projects.json";
import Skeleton from "../../components/Skeleton";
import Card from "../../components/Card";

import styles from "./project.module.scss";

type ProjectProps = {
	project: {
		coverImage: string;
		desc: string;
		descFull: string;
		id: number;
		tags: string[];
		title: string;
	};
};

export default function Project({ project }: ProjectProps) {
	const [imageLoaded, setImageLoaded] = React.useState(false);

	const thumbnailVariants = {
		initial: { x: -20, opacity: 0 },
		enter: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
		exit: {
			x: 20,
			opacity: 0,
			transition: { duration: 0.5 },
		},
	};

	const goBack = () => {
		Router.back();
	};

	return (
		<>
			<motion.div initial="initial" animate="enter" exit="exit">
				<motion.div variants={thumbnailVariants}>
					<Card backButtonCallback={goBack}>
						<h2 className={styles.title}>{project.title}</h2>
						<p className={styles.subtitle}>{project.desc}</p>
						<Skeleton className={styles.skeleton} height={300} />
						<picture className={styles.coverImage}>
							<source
								srcSet={project.coverImage + ".webp"}
								type="image/webp"
							/>
							<source
								srcSet={project.coverImage + ".png"}
								type="image/png"
							/>
							<source
								srcSet={project.coverImage + ".jpg"}
								type="image/jpeg"
							/>
							<img
								src={project.coverImage + ".jpg"}
								alt="Cover Photo"
								onLoad={() => setImageLoaded(true)}
							></img>
						</picture>
						<p>{project.descFull}</p>
					</Card>
				</motion.div>
			</motion.div>
		</>
	);
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { project: "0" } },
			{ params: { project: "1" } },
			{ params: { project: "2" } },
		],
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	let projectReference = projects.find((proj) => params.project == proj.id);
	return {
		props: {
			project: projectReference,
		},
	};
}
