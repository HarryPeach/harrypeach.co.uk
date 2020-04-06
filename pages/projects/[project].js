import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Project(props) {
	const router = useRouter();
	const { project } = router.query;

	return (
		<motion.div initial="initial" animate="enter" exit="exit">
			<p>project: {project}</p>
		</motion.div>
	);
}
