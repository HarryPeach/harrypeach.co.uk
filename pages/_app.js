import "../src/css/reset.css";
import "../src/css/global.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function handleExitComplete() {
	if (typeof window !== "undefined") {
		window.scrollTo(0, 0);
	}
}

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<AnimatePresence
				exitBeforeEnter
				onExitComplete={handleExitComplete}
			>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</>
	);
}

export default MyApp;
