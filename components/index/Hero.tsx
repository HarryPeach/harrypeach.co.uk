import styles from "./Hero.module.css";
import * as Variants from "../../src/js/animationVariants";

import React from "react";
import { FiGithub, FiGitlab, FiLinkedin, FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";
import SettingsDialog from "../misc/SettingsDialog";

export default function Header() {
	const [settingsDialogOpen, setSettingsDialogOpen] = React.useState(false);

	return (
		<>
			<motion.div
				className={styles.backdrop}
				initial="hidden"
				animate="show"
				exit="exit"
				variants={Variants.hero}
			></motion.div>
			<motion.div
				initial="hidden"
				animate="show"
				exit="exit"
				variants={Variants.hero}
				className={styles.container}
			>
				<FiSettings
					className={styles.settings}
					onClick={() => setSettingsDialogOpen(true)}
				/>
				<div className={styles.textContent}>
					<h1 className={styles.title}>Harry Peach</h1>
					<h2 className={styles.subtitle}>
						Computer Science Student at{" "}
						<a
							className={styles.titleLink}
							href="https://ncl.ac.uk/"
						>
							Newcastle University
						</a>
					</h2>
				</div>
				<div className={styles.links}>
					<div className={styles.link}>
						<a href="https://github.com/HarryPeach" title="GitHub">
							<FiGithub />
						</a>
					</div>
					<div className={styles.link}>
						<a href="https://gitlab.com/b" title="GitLab">
							<FiGitlab />
						</a>
					</div>
					<div className={styles.link}>
						<a
							href="https://www.linkedin.com/in/harry-peach-a28893156/"
							title="LinkedIn"
						>
							<FiLinkedin />
						</a>
					</div>
				</div>
				<SettingsDialog
					open={settingsDialogOpen}
					onClose={() => setSettingsDialogOpen(false)}
				/>
			</motion.div>
		</>
	);
}
