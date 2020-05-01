import React from "react";
import Router from "next/router";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

import * as Variants from "../src/js/animationVariants";
import styles from "./moreProjects.module.css";
import Head from "next/head";
import ProjectList from "../components/index/ProjectList";
import Backdrop from "../components/misc/Backdrop";

export default function MoreProjects() {
	const goBack = () => {
		Router.back();
	};

	return (
		<>
			<Head>
				<title>Harry Peach</title>
			</Head>
			<Backdrop />
			<motion.div
				initial="hidden"
				animate="show"
				exit="exit"
				variants={Variants.simpleFade}
				className={styles.title}
			>
				<div onClick={goBack}>
					<FiArrowLeft />
				</div>
				<h1>All Projects</h1>
			</motion.div>
			<ProjectList projectsToLoad={4} showMore={false} />
		</>
	);
}
