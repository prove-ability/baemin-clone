import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles/theme.css";

export const container = style([
	sprinkles({
		background: "dark",
	}),
	{
		// height: "100vh",
	},
]);

export const wrapper = style([
	sprinkles({
		display: "flex",
		flexDirection: "column",
		paddingBottom: "large",
		paddingTop: "large",
		background: "default",
	}),
	{
		margin: "0 auto",
		height: "100vh",
		width: "100%",
		maxWidth: "768px",
	},
]);
