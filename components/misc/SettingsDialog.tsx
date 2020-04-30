import { motion } from "framer-motion";

import * as Variants from "../../src/js/animationVariants";
import styles from "./SettingsDialog.module.css";

type DialogProps = {
	open: boolean;
	onClose: (event: React.MouseEvent) => void;
};

export default function Dialog({ open, onClose }: DialogProps) {
	const onClickHandler = (event: React.MouseEvent) => {
		event.preventDefault();
		if (event.target === event.currentTarget) {
			onClose(event);
		}
	};

	const setTheme = (color: string) => {
		document.documentElement.style.setProperty("--accent-raw", color);
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
					<h1 className={styles.title}>Settings</h1>
					<div className={styles.content}>
						<h2 className={styles.subtitle}>Theme</h2>
						<div
							className={styles.color}
							style={{ background: "rgba(255, 122, 122)" }}
							onClick={() => setTheme("255, 122, 122")}
						/>
						<div
							className={styles.color}
							style={{ background: "rgba(70, 218, 211)" }}
							onClick={() => setTheme("70, 218, 211")}
						/>
						<div
							className={styles.color}
							style={{ background: "rgba(103, 58, 183)" }}
							onClick={() => setTheme("103, 58, 183")}
						/>
						<div
							className={styles.color}
							style={{ background: "rgba(66, 255, 124)" }}
							onClick={() => setTheme("66, 255, 124")}
						/>
						<div
							className={styles.color}
							style={{ background: "rgba(220, 220, 220)" }}
							onClick={() => setTheme("220, 220, 220")}
						/>
					</div>
					<h2 className={styles.subtitle}>About</h2>
					<p>Version here perhaps?</p>
				</motion.div>
			</motion.div>
		);
	}

	return <></>;
}
