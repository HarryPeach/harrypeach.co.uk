import styles from "./Project.module.scss";
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "./Card";

type ProjectProps = {
	desc: string;
	id: number;
	tags: string[];
	title: string;
};

export default function Project({ id, tags, desc, title }: ProjectProps) {
	const projectTags = tags.map((tag) => {
		return (
			<span className={styles.tag} key={tag}>
				{tag}
			</span>
		);
	});

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<motion.div variants={item}>
			<Card>
				<h1 className={styles.title}>{title}</h1>
				{projectTags}
				<p className={styles.desc}>{desc}</p>
				<div className={styles.buttons}>
					{/* {props.source && <Button secondary>Source Code</Button>} */}
					<Link href="/projects/[project]" as={`/projects/${id}`}>
						<Button>More</Button>
					</Link>
				</div>
			</Card>
		</motion.div>
	);
}
