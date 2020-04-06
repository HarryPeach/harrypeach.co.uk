import styles from "./Index.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Project from "../components/Project";

import { motion } from "framer-motion";

export default function Index() {
	return (
		<div className={styles.root}>
			<Head>
				<title>Harry Peach</title>
			</Head>
			<motion.div
				className={styles.content}
				initial="initial"
				animate="enter"
				exit="exit"
				variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
			>
				<Header />
				<Project
					title="Sample project"
					tags={["React", "Javascript", "Python"]}
					desc="Sint aliquip dolore ex laborum aliquip laborum."
					image=""
					source="/test"
				/>
				<Project
					title="Sample project"
					tags={["React", "Javascript", "Python"]}
					desc="Sint aliquip dolore ex laborum aliquip laborum."
					image=""
					source="http://example.com"
				/>
				<Project
					title="Sample project"
					tags={["React", "Javascript", "Python"]}
					desc="Sint aliquip dolore ex laborum aliquip laborum."
					image=""
					source="http://example.com"
				/>
			</motion.div>
		</div>
	);
}
