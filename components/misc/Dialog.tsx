import { motion } from "framer-motion";

import * as Variants from "../../src/js/animationVariants";
import styles from "./Dialog.module.css";

type DialogProps = {
	children?: React.ReactNode;
	open: boolean;
	onClose: (event: React.MouseEvent) => void;
};

export default function Dialog({ children, open, onClose }: DialogProps) {
	const onClickHandler = (event: React.MouseEvent) => {
		event.preventDefault();
		if (event.target === event.currentTarget) {
			onClose(event);
		}
	};

	if (open) {
		return (
			<motion.div
				className={styles.container}
				onClick={onClickHandler}
				initial="hidden"
				animate="show"
				exit="exit"
				variants={Variants.dialogFade}
			>
				<motion.div
					className={styles.dialog}
					variants={Variants.dialogFall}
				>
					{children}
				</motion.div>
			</motion.div>
		);
	}

	return <></>;
}
