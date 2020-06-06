import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Router from "next/router";
import { FiCode, FiGlobe, FiPackage } from "react-icons/fi";

import * as Variants from "../../src/js/animationVariants";
import projects from "../../data/projects.json";
import Card from "../../components/Card";
import Skeleton from "../../components/Skeleton";

import styles from "./project.module.css";

type ProjectProps = {
	project: {
		coverImage: string;
		desc: string;
		descFull: string;
		id: number;
		tags: string[];
		title: string;
		sourceLink: string;
		prodLink: string;
		releaseLink: string;
	};
};

export default function Project({ project }: ProjectProps) {
	const [imageLoaded, setImageLoaded] = React.useState(false);
	const imageRef = React.useRef(null);

	const goBack = () => {
		Router.back();
	};

	useEffect(() => {
		if (imageRef.current?.complete) {
			setImageLoaded(true);
		}
	});

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
						<Skeleton
							className={styles.skeleton}
							height={300}
							visible={!imageLoaded}
						/>
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
								style={{
									display: imageLoaded ? "block" : "none",
								}}
								onLoad={() => setImageLoaded(true)}
								ref={imageRef}
							></img>
						</picture>
						<p className={styles.content}>{project.descFull}</p>
						<div className={styles.links}>
							{project.sourceLink && (
								<a
									href={project.sourceLink}
									className={styles.link}
								>
									<FiCode />
									Source
								</a>
							)}
							{project.prodLink && (
								<a
									href={project.prodLink}
									className={styles.link}
								>
									<FiGlobe />
									Live demo
								</a>
							)}
							{project.releaseLink && (
								<a
									href={project.releaseLink}
									className={styles.link}
								>
									<FiPackage />
									Releases
								</a>
							)}
						</div>
					</Card>
				</motion.div>
			</motion.div>
		</>
	);
}

export async function getStaticPaths() {
	return {
		paths: Array(projects.length)
			.fill(1)
			.map((_, i) => {
				return { params: { project: i.toString() } };
			}),
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
