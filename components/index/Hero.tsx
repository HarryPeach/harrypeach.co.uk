import styles from "./Hero.module.css";
import * as Variants from "../../src/js/animationVariants";

import { FiGithub, FiGitlab, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header() {
	return (
		<motion.div initial="hidden"
			animate="show"
			exit="exit"
			variants={Variants.hero}
			className={styles.header}>
			<div className={styles.textContent}>
				<h1 className={styles.title}>Harry Peach</h1>
				<h2 className={styles.subtitle}>
					Computer Science Student at <a className={styles.titleLink} href="https://ncl.ac.uk/">Newcastle University</a>
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
		</motion.div>
	);
}
