if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
	require("../mocks");
}

import "antd/dist/antd.css";
import "styles/reset.css";

import type { AppProps } from "next/app";
import Layout from "components/layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
