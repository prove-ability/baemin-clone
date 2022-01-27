import "styles/reset.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { darkTheme, lightTheme } from "styles/themes.css";

function cleanThemes() {
	document.body.classList.remove(lightTheme);
	document.body.classList.remove(darkTheme);
}

function light() {
	cleanThemes();
	document.body.classList.add(lightTheme);
}

function dark() {
	cleanThemes();
	document.body.classList.add(darkTheme);
}

function switchTheme() {
	if (document.body.classList.contains(lightTheme)) dark();
	else light();
}

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		light();
		return cleanThemes;
	}, []);
	return (
		<Layout>
			<Component {...pageProps} />
			{/* <button onClick={switchTheme}>Switch theme</button> */}
		</Layout>
	);
}

export default MyApp;
