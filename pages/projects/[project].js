import projects from "../../data/projects";
import { motion } from "framer-motion";
import Header from "../../components/Header";

import styles from "./project.module.scss";

export default function Project(props) {
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

	return (
		<>
			<Header />
			<motion.div initial="initial" animate="enter" exit="exit">
				<motion.div
					variants={thumbnailVariants}
					className={styles.project}
				>
					<h2 className={styles.title}>{props.project.title}</h2>
					<p className={styles.subtitle}>{props.project.desc}</p>
					<picture className={styles.coverImage}>
						<source
							srcSet={props.project.coverImage + ".webp"}
							type="image/webp"
						/>
						<source
							srcSet={props.project.coverImage + ".png"}
							type="image/png"
						/>
						<source
							srcSet={props.project.coverImage + ".jpg"}
							type="image/jpeg"
						/>
						<img
							src={props.project.coverImage + ".jpg"}
							alt="Cover Photo"
						></img>
					</picture>
					<p>{props.project.descFull}</p>
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
