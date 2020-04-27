import React from "react";
import Head from "next/head";
import Hero from "../components/index/Hero";
import ProjectList from "../components/index/ProjectList";
import MyInfo from "../components/index/MyInfo";

export default function Index() {
	return (
		<>
			<Head>
				<title>Harry Peach</title>
			</Head>
			<Hero />
			<ProjectList />
			<MyInfo />
		</>
	);
}
