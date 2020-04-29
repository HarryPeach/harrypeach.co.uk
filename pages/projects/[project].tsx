import React from "react";
import { motion } from "framer-motion";
import Router from "next/router";

import * as Variants from "../../src/js/animationVariants";
import projects from "../../data/projects.json";
import Card from "../../components/Card";

import styles from "./project.module.css";

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

	const goBack = () => {
		Router.back();
	};

	return (
		<>
			<motion.div initial="initial" animate="enter" exit="exit">
				<motion.div variants={Variants.largeItemVariant}>
					<Card
						className={styles.project}
						backButtonCallback={goBack}
					>
						<h1 className={styles.title}>{project.title}</h1>
						<h2 className={styles.subtitle}>{project.desc}</h2>
						{/* <Skeleton className={styles.skeleton} height={300} /> */}
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
						<p className={styles.content}>{project.descFull}</p>
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
