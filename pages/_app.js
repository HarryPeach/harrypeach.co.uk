import "../src/css/reset.css";
import "../src/css/global.scss";
import { AnimatePresence } from "framer-motion";
// require("../src/css/global.module.scss");

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	);
}
