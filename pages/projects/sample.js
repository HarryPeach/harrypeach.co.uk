import Link from "next/link";
import Router from "next/router";
import { motion } from "framer-motion";

export default function Sample(props) {
	return (
		<motion.div initial="initial" animate="enter" exit="exit">
			<Link href="/" as="/">
				<a>← Back</a>
			</Link>
			<p onClick={() => Router.push("/")}>Clicme please asdas</p>
		</motion.div>
	);
}
