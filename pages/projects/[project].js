import projects from "../../data/projects";
import { motion } from "framer-motion";
import Header from "../../components/Header";

import styles from "./project.module.scss";

export default function Project(props) {
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
							srcset={props.project.coverImage + ".webp"}
							type="image/webp"
						/>
						<source
							srcset={props.project.coverImage + ".jpg"}
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

export async function getServerSideProps(context) {
	let projectReference = projects.find(
		(proj) => context.params.project == proj.id
	);
	return {
		props: {
			project: projectReference,
		},
	};
}
