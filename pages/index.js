import styles from "./Index.module.scss";
import Head from "next/head";
import Header from "../components/Header";

export default function Index() {
	return (
		<>
			<Head>
				<title>Harry Peach</title>
			</Head>
			<div className={styles.content}>
				<Header />
			</div>
		</>
	);
}
