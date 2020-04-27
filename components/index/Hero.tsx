import styles from "./Hero.module.scss";

import { FiGithub, FiGitlab, FiLinkedin } from "react-icons/fi";

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.textContent}>
				<h1 className={styles.title}>Harry Peach</h1>
				<h2 className={styles.subtitle}>
					Computer Science Student at Newcastle University
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
		</div>
	);
}
