import { motion } from "framer-motion";

import * as Variants from "../../src/animationVariants";

import styles from "./MyInfo.module.scss";

export default function MyInfo() {
	return (
		<div className={styles.section}>
			<motion.div
				initial="hidden"
				animate="show"
				exit="exit"
				variants={Variants.regularItem}
			>
				<h2 className={styles.title}>My info</h2>
				<div className={styles.content}>This is info about me</div>
			</motion.div>
		</div>
	);
}
