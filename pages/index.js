import styles from "./Index.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Project from "../components/Project";

export default function Index() {
	return (
		<div className={styles.root}>
			<Head>
				<title>Harry Peach</title>
			</Head>
			<div className={styles.content}>
				<Header />
				<Project
					title="Sample project"
					tags={["React", "Javascript", "Python"]}
					desc="Sint aliquip dolore ex laborum aliquip laborum."
					image=""
					source="http://example.com"
				/>
			</div>
		</div>
	);
}
