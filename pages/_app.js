import "../src/css/reset.css";
import "../src/css/global.scss";
// require("../src/css/global.module.scss");

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
