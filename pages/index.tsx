import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Head from "next/head";
import Hero from "../components/index/Hero";
import ProjectList from "../components/index/ProjectList";
import MyInfo from "../components/index/MyInfo";
import * as Variants from "../src/js/animationVariants";
import styles from "./index.module.css";
import Backdrop from "../components/misc/Backdrop";

export default function Index() {
	return (
		<>
			<Backdrop />
			<Head>
				<title>Harry Peach</title>
			</Head>
			<Hero />
			<ProjectList />
			<MyInfo />
		</>
	);
}
