import { motion } from "framer-motion";

import * as Variants from "../../src/js/animationVariants";
import styles from "./SettingsDialog.module.css";

type DialogProps = {
	open: boolean;
	onClose: (event: React.MouseEvent) => void;
};

export default function Dialog({ open, onClose }: DialogProps) {
	const themeChoices = [
		[255, 122, 122], // Pink
		[70, 218, 211], // Cyan
		[138, 75, 249], // Purple
		[66, 255, 124], // Pastel Green
		[220, 220, 200], // Off-white
	];

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
						{themeChoices.map((theme) => (
							<div
								key={theme.toString()}
								className={styles.color}
								style={{
									background: `rgba(${theme[0]}, ${theme[1]}, ${theme[2]})`,
								}}
								onClick={() =>
									setTheme(
										`${theme[0]}, ${theme[1]}, ${theme[2]}`
									)
								}
							/>
						))}
					</div>
					<div className={styles.content}>
						<h2 className={styles.subtitle}>About</h2>
						<p>Version x.x.x</p>
					</div>
				</motion.div>
			</motion.div>
		);
	}

	return <></>;
}
