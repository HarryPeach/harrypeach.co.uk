import { motion } from "framer-motion";

import * as Variants from "../../src/js/animationVariants";
import styles from "./Backdrop.module.css";

export default function Backdrop() {
	return (
		<motion.div
			className={styles.backdrop}
			initial="hidden"
			animate="show"
			exit="exit"
			variants={Variants.simpleFade}
		></motion.div>
	);
}
