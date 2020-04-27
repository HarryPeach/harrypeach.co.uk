import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";

export default function Index() {
	return (
		<>
			<Head>
				<title>Harry Peach</title>
			</Head>
			<Hero />
			<ProjectList />
		</>
	);
}
